"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

interface Props {
  textOption: string;
  path: string;
}

const OptionNavBar = ({ textOption, path }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div
      onClick={() => {
        router.push(`/home/${path}`);
      }}
      className="w-[150px] h-[93px] flex flex-col justify-end items-center text-[16px] font-bold font-principal text-white
    hover:text-slate-200 active:text-slate-300 cursor-pointer hover:bg-hover-principal-blue
    active:bg-active-principal-blue"
    >
      <p className="mb-3 z-10">{textOption}</p>
      {pathName.includes(path) ? (
        <div className="w-full bg-white p-1" />
      ) : (
        <div className="w-full bg-transparent p-1" />
      )}
    </div>
  );
};

export default OptionNavBar;
