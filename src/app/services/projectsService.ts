import { projectBackendToFrontend } from '../interfaces/projectInterface';
import { ProjectDB } from '../model/projectDBModel';
import { ProjectFR } from '../model/projectFRModel';
import axiosInstance from './apiInstance';

export const getProjectsFromDB = async () => {
  console.log("getting");
  const data = await axiosInstance.get("/projects");
  console.log("hola mundo");
  console.log(data);
  const projectListFR:ProjectFR[] = data.data.map((item:ProjectDB) => {
    return projectBackendToFrontend(item);
  });
  return projectListFR;
};