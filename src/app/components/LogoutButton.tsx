"use client";
import React from "react";

const LogoutButton = () => {
  const logOut = () => {
    console.log("log out");
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
