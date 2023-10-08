"use client";
import React, { useContext, useEffect, useState } from "react";
import HeaderApp from "../components/HeaderApp";
import { StoreContext } from "@/app/store/StoreProvider";
import { setAuthToken } from "../services/authService";

interface Props {
  children: React.ReactNode;
}

const PrincipalLayout = ({ children }: Props) => {
  const context: any = useContext(StoreContext);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("auth-login")) {
        setAuthToken(JSON.parse(localStorage.getItem("auth-login") || ""));
      }

      if (localStorage.getItem("auth")) {
        const value: boolean = JSON.parse(
          localStorage.getItem("auth") || "false"
        );
        context.setAuth(value);
      }
    }
  }, []);

  return (
    <section className="min-w-screen min-h-screen fixed top-0 bottom-0 left-0 right-0 flex flex-col">
      {context.auth && <HeaderApp titleTextPage={context.titleHeaderPage} />}
      <main className="w-full h-full overflow-y-auto">{children}</main>
    </section>
  );
};

export default PrincipalLayout;
