"use client";
import React from "react";

interface Props {
  titleText: string;
}

const PageTitle = ({ titleText }: Props) => {
  return (
    <h1 className="ml-[60px] text-[56px] font-bold font-principal text-white">
      {titleText}
    </h1>
  );
};

export default PageTitle;
