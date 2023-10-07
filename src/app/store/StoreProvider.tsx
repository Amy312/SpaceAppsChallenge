"use client";
import React, { createContext, useState } from "react";

export const StoreContext = createContext({});

interface Props {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<boolean>(false);

  const [titleHeaderPage, setTitleHeaderPage] = useState<string>("EcuiP+");

  return (
    <StoreContext.Provider
      value={{
        auth,
        setAuth,
        titleHeaderPage,
        setTitleHeaderPage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
