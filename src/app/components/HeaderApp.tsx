"use client";
import React from "react";
import PageTitle from "./PageTitle";
import HeaderOptions from "./HeaderOptions";
import LogoutButton from "./LogoutButton";

interface Props {
  titleTextPage: string;
}

const HeaderApp = ({ titleTextPage }: Props) => {
  return (
    <header className="w-full h-[93px] p-3 flex flex-row justify-between items-center bg-[#47576E] shadow-lg">
      <PageTitle titleText={titleTextPage} />
      <HeaderOptions />
      <LogoutButton />
    </header>
  );
};

export default HeaderApp;
