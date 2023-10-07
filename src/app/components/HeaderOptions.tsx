"use client";
import React from "react";
import { NAVBAR_OPTIONS } from "../data/navBarOptionsData";
import { NavBarOption } from "../model/navBarOptionsModel";
import OptionNavBar from "./OptionNavBar";

const HeaderOptions = () => {
  return (
    <nav className="m-1 w-[480px] flex flex-row flex-wrap justify-around">
      {NAVBAR_OPTIONS.map((item: NavBarOption, index: number) => (
        <OptionNavBar
          key={index}
          textOption={item.textOption}
          path={item.path}
        />
      ))}
    </nav>
  );
};

export default HeaderOptions;
