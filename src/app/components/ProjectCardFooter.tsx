"use client";
import React, { useContext, useEffect } from "react";
import SkillsList from "./SkillsList";
import GeneralActionButton from "./GeneralActionButton";
import { GeneralButton } from "../model/generalButtonModel";
import { StoreContext } from "../store/StoreProvider";
import { ProjectFR } from "../model/projectFRModel";

interface Props {
  project: ProjectFR;
  buttonData: GeneralButton;
  action: () => void;
}

const ProjectCardFooter = ({ project, buttonData, action }: Props) => {
  const context: any = useContext(StoreContext);

  const { skill } = project;

  buttonData.action = action;

  useEffect(() => {
    context.setApplyData({
      id: 0,
      title: "",
      description: "",
      skill: [],
      duration: new Date(),
      linkedinCreator: "",
    });
    // applyData, setApplyData
  }, []);

  return (
    <div className="flex flex-row justify-between items-center mb-3 m-1">
      <SkillsList listSkills={skill} />
      <div className="mr-5">
        <GeneralActionButton buttonData={buttonData} />
      </div>
    </div>
  );
};

export default ProjectCardFooter;
