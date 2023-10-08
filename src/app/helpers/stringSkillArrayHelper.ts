import { SkillProject } from "../model/skillProjectModel";

export const stringToSkillArray = (value:string):SkillProject[] => {
  const itemsArray = value.split(',');

  const listSkills:SkillProject[] = itemsArray.map(item => {return {text:item}});

  return listSkills;
}

export const skillArrayToString = (value:SkillProject[]):string => {
  const texts = value.map(item => item.text);

  const backendString = texts.join(', ');

  return backendString;
};
