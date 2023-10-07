"use client";
import React from "react";
import TitleProjectCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";

interface Props {
  titleText: string;
  descriptionText: string;
  children: React.ReactNode;
}

const Card = ({ titleText, descriptionText, children }: Props) => {
  return (
    <div className="w-[900px] h-max m-1 p-2 flex flex-col rounded-tr-xl rounded-b-xl border-2 border-black shadow-md">
      <TitleProjectCard titleText={titleText} />
      <DescriptionCard descriptionText={descriptionText} />
      {children}
    </div>
  );
};

export default Card;
