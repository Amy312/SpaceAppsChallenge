"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import axiosInstance from "../services/apiInstance";

const LogoutButton = () => {
  const context: any = useContext(StoreContext);
  const router = useRouter();

  const logOut = () => {
    context.setAuth(false);
    axiosInstance.post('/auth/token/logout');
    router.push("/auth/login");
  };

  return (
    <button
      onClick={logOut}
      className="px-[32px] py-[8px] bg-white hover:bg-slate-100 active:bg-slate-200 shadow-lg rounded-lg text-[20px] text-black
     font-principal font-semibold"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
