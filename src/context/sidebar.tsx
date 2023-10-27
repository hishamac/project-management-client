"use client";

import { parseJwt } from "@/lib/cryptr";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

type DataType = boolean;

interface ContextProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<DataType>>;
}

const SideBarContext = createContext<ContextProps>({
  isSideBarOpen: false,
  setIsSideBarOpen: (): DataType => {
    return false;
  },
});

export const SideBarContextProvider = ({ children }: any) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<DataType>(false);
  return (
    <SideBarContext.Provider value={{ isSideBarOpen , setIsSideBarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarContext = () => useContext(SideBarContext);