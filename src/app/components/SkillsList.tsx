"use client";
import React from "react";
import { SkillProject } from "../model/skillProjectModel";
import Skill from "./Skill";

interface Props {
  listSkills: SkillProject[];
}

const SkillsList = ({ listSkills }: Props) => {
  return (
    <section className="m-1 p-1 w-[400px] flex flex-row flex-wrap font-light">
      {listSkills.map((item: SkillProject) => (
        <Skill key={item.text} skill={item} />
      ))}
    </section>
  );
};

export default SkillsList;
