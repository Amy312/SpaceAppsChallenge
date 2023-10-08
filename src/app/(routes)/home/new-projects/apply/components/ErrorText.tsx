import React from "react";

interface Props {
  text: string;
}

const ErrorText = ({ text }: Props) => {
  return (
    <p className="text-base text-red-500 font-normal font-principal ml-2 mb-2">
      {text}
    </p>
  );
};

export default ErrorText;
