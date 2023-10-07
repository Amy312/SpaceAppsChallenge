"use client";
import React from "react";

interface Props {
  descriptionText: string;
}

const DescriptionCard = ({ descriptionText }: Props) => {
  return (
    <p className="w-[700px] text-base font-light m-2 ">{descriptionText}</p>
  );
};

export default DescriptionCard;
