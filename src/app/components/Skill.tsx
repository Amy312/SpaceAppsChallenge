"use client";
import React from "react";
import { SkillProject } from "../model/skillProjectModel";

interface Props {
  skill: SkillProject;
}

const Skill = ({ skill }: Props) => {
  const { text } = skill;
  return (
    <p
      className="m-1 min-w-max py-1 px-[16px] rounded-xl border-[1px] border-black text-center text-base
    font-principal"
    >
      {text}
    </p>
  );
};

export default Skill;
