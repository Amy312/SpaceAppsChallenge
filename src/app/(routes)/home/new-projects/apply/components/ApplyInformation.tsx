import React from "react";

interface Props {
  text: string;
  type: "requirement" | "linkedin" | "duration";
}

const ApplyInformation = ({ text, type }: Props) => {
  const STYLE_WIDTH: string =
    type === "requirement"
      ? "min-w-[175px]"
      : type === "linkedin"
      ? "min-w-[500px]"
      : "min-w-[225px]";
  return (
    <p
      className={`flex m-1 py-2 pl-2 ${STYLE_WIDTH} rounded-2xl border-2 border-black text-start text-base
    font-principal`}
    >
      {text}
    </p>
  );
};

export default ApplyInformation;
