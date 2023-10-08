"use client";
import React, { useContext, useState } from "react";
import HeaderApp from "../components/HeaderApp";
import { StoreContext } from "@/app/store/StoreProvider";

interface Props {
  children: React.ReactNode;
}

const PrincipalLayout = ({ children }: Props) => {
  const context: any = useContext(StoreContext);
  const [login, setLogin] = useState(false);
  return (
    <section className="min-w-screen min-h-screen fixed top-0 bottom-0 left-0 right-0 flex flex-col">
      {login && <HeaderApp titleTextPage={context.titleHeaderPage} />}
      <main className="w-full h-full overflow-y-auto">{children}</main>
    </section>
  );
};

export default PrincipalLayout;
