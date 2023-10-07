"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div
      className="w-[900px] h-max m-1 p-2 flex flex-col rounded-tr-3xl rounded-b-3xl border-2 border-[#60656B] shadow-md
    mb-5"
    >
      {children}
    </div>
  );
};

export default Card;
