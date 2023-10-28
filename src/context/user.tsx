"use client";

import { CheckLoggedInDocument, CheckLoggedInQuery, CheckLoggedInQueryVariables, LoginType, Member } from "@/gql/graphql";
import { parseJwt } from "@/lib/cryptr";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { OperationResult, useQuery } from "urql";

type DataType = Member;

interface ContextProps {
  user: DataType;
  setUser: Dispatch<SetStateAction<DataType>>;
}

const GlobalContext = createContext<ContextProps>({
  user: {} as DataType,
  setUser: (): DataType => {
    return {} as DataType;
  },
});

export const GlobalContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<DataType>({} as DataType);

  const [result] = useQuery<CheckLoggedInQuery, CheckLoggedInQueryVariables>({
    query: CheckLoggedInDocument,
  });

  useEffect(() => {
    if (result.data?.checkLoggedIn) {
      setUser(result.data.checkLoggedIn as Member);
    }
  }, [result]);

  return (
    <GlobalContext.Provider value={{ user , setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);