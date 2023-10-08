"use client";
import { register } from "module";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<ProposalForm>;
}

const ApplyLinkedin = ({ register }: Props) => {
  return (
    <input
      className="w-[500px] p-2 border-2 border-black rounded-xl font-principal"
      placeholder="put your link"
      required={true}
      {...register("linkedin")}
    />
  );
};

export default ApplyLinkedin;
