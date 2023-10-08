import GeneralActionButton from '@/app/components/GeneralActionButton';
import SkillsList from '@/app/components/SkillsList';
import { GeneralButton } from '@/app/model/generalButtonModel';
import { ProjectFR } from '@/app/model/projectFRModel';
import React from 'react'
import StateActivity from './StateActivity';

interface Props {
    id: number;
    project: ProjectFR;
    stateAct: boolean;
  }

const FooterYourApplies = ({ id, project, stateAct }: Props) => {
  const { skill } = project;
  return (
    <div className="flex flex-row justify-between items-center mb-3 m-1">
      <SkillsList listSkills={skill} />
      <div className="mr-5 flex flex-row">
        <StateActivity state={stateAct}/>
      </div>
    </div>
  )
}

export default FooterYourApplies