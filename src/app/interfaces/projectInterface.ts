import { skillArrayToString, stringToSkillArray } from "../helpers/stringSkillArrayHelper";
import { ProjectDB } from "../model/projectDBModel"
import { ProjectFR } from "../model/projectFRModel"

export const projectBackendToFrontend = (project:ProjectDB):ProjectFR => {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    skill: stringToSkillArray(project.requirements),
    duration: project.duration,
    linkedinCreator: project.linkedin_creator
  };
}

export const projectFrontendToBackend = (project:ProjectFR):ProjectDB => {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    requirements: skillArrayToString(project.skill),
    duration: project.duration,
    linkedin_creator: project.linkedinCreator
  };
}
