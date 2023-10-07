"use client";
import React from "react";

interface Props {
  descriptionText: string;
}

const DescriptionCard = ({ descriptionText }: Props) => {
  return (
    <p className="w-[700px] max-h-[100px] overflow-y-auto text-base font-extralight m-2 font-principal">
      {descriptionText}
    </p>
  );
};

export default DescriptionCard;
