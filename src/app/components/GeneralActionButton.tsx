"use client";
import React from "react";
import { GeneralButton } from "../model/generalButtonModel";

interface Props {
  buttonData: GeneralButton;
}

const GeneralActionButton = ({ buttonData }: Props) => {
  const { text, action, type, padding, colorButton, size } = buttonData;
  return (
    <button
      type={type}
      onClick={action}
      className={`rounded-lg shadow-lg ${padding} ${colorButton} font-medium ${size} text-white font-principal`}
    >
      {text}
    </button>
  );
};

export default GeneralActionButton;
