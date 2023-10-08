import React from "react";

interface Props {
  text: string;
}

const TitlePage = ({ text }: Props) => {
  return <h1 className="text-3xl font-bold font-principal">{text}</h1>;
};

export default TitlePage;
