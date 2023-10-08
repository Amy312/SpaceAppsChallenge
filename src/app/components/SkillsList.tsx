"use client";
import React from "react";
import { SkillProject } from "../model/skillProjectModel";
import Skill from "./Skill";

interface Props {
  listSkills: SkillProject[];
}

const SkillsList = ({ listSkills }: Props) => {
  //onsole.log(listSkills, listSkills.length);
  return (
    <section className="m-1 p-1 w-[600px] flex flex-row overflow-x-auto font-light">
      {listSkills.map((item) => (
        <Skill key={item.text} skill={item} />
      ))}
    </section>
  );
};

export default SkillsList;
