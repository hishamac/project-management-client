"use client";

import { LoginType } from "@/gql/graphql";
import { parseJwt } from "@/lib/cryptr";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

type DataType = LoginType;

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

  useEffect(() => {
    const cookie = document.cookie
      .split(";")
      .find((cookie) => cookie.startsWith("_adm_="));
    if (cookie) {
      const token = cookie.split("=")[1];
      const payload = parseJwt(token);
      setUser({
        admin: {
          ...payload,
        },
        token: cookie.split("=")[1],
      });
    }
  }, []);
  return (
    <GlobalContext.Provider value={{ user , setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);