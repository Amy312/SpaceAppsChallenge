import Skill from "@/app/components/Skill";
import TitleCard from "@/app/components/TitleCard";
import { SkillProject } from "@/app/model/skillProjectModel";
import React from "react";

interface Props {
  skillList: SkillProject[];
}

const ApplySkillList = ({ skillList }: Props) => {
  return (
    <section className="flex flex-col justify-start items-start">
      <TitleCard titleText={"Requirements"} />
      <div className="m-1 p-1 flex flex-row flex-wrap">
        {skillList.map((item, index) => (
          <Skill key={index} skill={item} />
        ))}
      </div>
    </section>
  );
};

export default ApplySkillList;
