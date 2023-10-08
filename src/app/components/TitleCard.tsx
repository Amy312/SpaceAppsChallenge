"use client";
import React from "react";

interface Props {
  titleText: string;
}

const TitleCard = ({ titleText }: Props) => {
  return (
    <h1 className="m-2 text-xl font-semibold font-principal">{titleText}</h1>
  );
};

export default TitleCard;
