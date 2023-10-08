"use client";
import React, { useContext, useEffect } from "react";
import SkillsList from "./SkillsList";
import GeneralActionButton from "./GeneralActionButton";
import { GeneralButton } from "../model/generalButtonModel";
import { SkillProject } from "../model/skillProjectModel";
import { useRouter } from "next/navigation";
import { StoreContext } from "../store/StoreProvider";
import { ProjectFR } from "../model/projectFRModel";

interface Props {
  id: number;
  project: ProjectFR;
  buttonData: GeneralButton;
}

const ProjectCardFooter = ({ id, project, buttonData }: Props) => {
  const context: any = useContext(StoreContext);

  const { skill } = project;

  const router = useRouter();

  const actionButton = () => {
    context.setApplyData(project);
    router.push(`/home/new-projects/apply/${id}`);
  };
  const updatedButtonData = { ...buttonData, action: actionButton };

  // useEffect(() => {
  //   context.setApplyData({
  //     id: 0,
  //     title: "",
  //     description: "",
  //     skill: [],
  //     duration: new Date(),
  //     linkedinCreator: "",
  //   });
  // }, [context]);

  return (
    <div className="flex flex-row justify-between items-center mb-3 m-1">
      <SkillsList listSkills={skill} />
      <div className="mr-5">
        <GeneralActionButton buttonData={updatedButtonData} />
      </div>
    </div>
  );
};

export default ProjectCardFooter;
