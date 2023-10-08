"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<ProposalForm>;
}

const ApplyTextTarea = ({ register }: Props) => {
  return (
    <textarea
      {...register("description")}
      placeholder="Choose me"
      className="w-[700px] p-3 border-2 border-black rounded-2xl
  resize-none h-[200px]"
      required={true}
    ></textarea>
  );
};

export default ApplyTextTarea;
