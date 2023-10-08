import { SkillProject } from "./skillProjectModel";

export interface ProjectFR{
  id: number,
  title: string,
  description: string,
  skill: SkillProject[],
  duration: Date,
  linkedinCreator: string
}
