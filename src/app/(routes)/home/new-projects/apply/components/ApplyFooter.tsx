import React from "react";
import ApplySkillList from "./ApplySkillList";
import { SkillProject } from "@/app/model/skillProjectModel";

interface Props {
  skillList: SkillProject[];
}

const ApplyFooter = ({ skillList }: Props) => {
  return (
    <footer className="flex flex-col">
      <ApplySkillList skillList={skillList} />
    </footer>
  );
};

export default ApplyFooter;
