"use client";
import React from "react";
import SkillsList from "./SkillsList";
import GeneralActionButton from "./GeneralActionButton";
import { GeneralButton } from "../model/generalButtonModel";

interface Props {
  buttonData: GeneralButton;
}

const ProjectCardFooter = ({ buttonData }: Props) => {
  const actionButton = () => {
    console.log("Project Card Footer");
  };
  buttonData.action = actionButton;

  return (
    <div className="flex flex-row justify-between mb-3 m-1">
      <SkillsList />
      <GeneralActionButton buttonData={buttonData} />
    </div>
  );
};

export default ProjectCardFooter;
