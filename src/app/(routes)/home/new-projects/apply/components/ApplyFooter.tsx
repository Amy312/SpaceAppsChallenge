import React from "react";
import { SkillProject } from "@/app/model/skillProjectModel";
import { ProjectFR } from "@/app/model/projectFRModel";
import ApplySection from "./ApplySection";
import Skill from "@/app/components/Skill";
import { dateToString } from "@/app/helpers/dateStringHelper";
import ApplyInformation from "./ApplyInformation";

interface Props {
  applyData: ProjectFR;
}

const ApplyFooter = ({ applyData }: Props) => {
  const { skill, duration, linkedinCreator } = applyData;

  return (
    <footer className="flex flex-col p-5">
      <ApplySection sectionText="Requirements">
        {skill.map((item, index) => (
          <ApplyInformation key={index} text={item.text} type={"requirement"} />
        ))}
      </ApplySection>
      <div className="h-max flex flex-row justify-between items-center">
        <ApplySection sectionText={"Linkedln Profile"}>
          <ApplyInformation text={linkedinCreator} type={"linkedin"} />
        </ApplySection>
        <ApplySection sectionText={"Duration"}>
          <ApplyInformation text={dateToString(duration)} type={"duration"} />
        </ApplySection>
      </div>
    </footer>
  );
};

export default ApplyFooter;
