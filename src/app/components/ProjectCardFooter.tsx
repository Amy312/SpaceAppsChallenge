"use client";
import React from "react";
import SkillsList from "./SkillsList";
import GeneralActionButton from "./GeneralActionButton";
import { GeneralButton } from "../model/generalButtonModel";
import { SkillProject } from "../model/skillProjectModel";
import { useRouter } from "next/navigation";

interface Props {
  buttonData: GeneralButton;
  listSkills: SkillProject[];
}

const ProjectCardFooter = ({ buttonData, listSkills }: Props) => {
  const router = useRouter();

  const actionButton = () => {
    router.push("/home/new-projects/apply");
  };
  buttonData.action = actionButton;

  return (
    <div className="flex flex-row justify-between items-center mb-3 m-1">
      <SkillsList listSkills={listSkills} />
      <div className="mr-5">
        <GeneralActionButton buttonData={buttonData} />
      </div>
    </div>
  );
};

export default ProjectCardFooter;
