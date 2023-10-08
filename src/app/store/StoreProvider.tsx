"use client";
import moment from "moment";
import React, { createContext, useState } from "react";
import { ProjectFR } from "../model/projectFRModel";

export const StoreContext = createContext({});

interface Props {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<boolean>(false);

  const [titleHeaderPage, setTitleHeaderPage] = useState<string>("EcuiP+");

  const [applyData, setApplyData] = useState<ProjectFR>({
    id: 0,
    title: "",
    description: "",
    skill: [],
    duration: new Date(),
    linkedinCreator: "",
  });

  return (
    <StoreContext.Provider
      value={{
        auth,
        setAuth,
        titleHeaderPage,
        setTitleHeaderPage,
        applyData,
        setApplyData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
