"use client";
import React, { useContext, useEffect } from "react";
import SkillsList from "./SkillsList";
import GeneralActionButton from "./GeneralActionButton";
import { GeneralButton } from "../model/generalButtonModel";
import { SkillProject } from "../model/skillProjectModel";
import { useRouter } from "next/navigation";
import { StoreContext } from "../store/StoreProvider";

interface Props {
  id: number;
  buttonData: GeneralButton;
  listSkills: SkillProject[];
}

const ProjectCardFooter = ({ id, project, buttonData, listSkills }: Props) => {
  const context: any = useContext(StoreContext);

  const router = useRouter();

  const actionButton = () => {
    context.setApplyData(project);
    router.push(`/home/new-projects/apply/${id}`);
  };
  buttonData.action = actionButton;

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
      <SkillsList listSkills={listSkills} />
      <div className="mr-5">
        <GeneralActionButton buttonData={buttonData} />
      </div>
    </div>
  );
};

export default ProjectCardFooter;
