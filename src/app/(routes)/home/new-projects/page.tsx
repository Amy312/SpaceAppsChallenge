"use client";
import Card from "@/app/components/Card";
import ProjectCardFooter from "@/app/components/ProjectCardFooter";
import SkillsList from "@/app/components/SkillsList";
import TitleCard from "@/app/components/TitleCard";
import TitlePage from "@/app/components/TitlePage";
import { NEW_PROJECTS_BUTTON_STYLE } from "@/app/data/projectsButtonData";
import { ProjectDB } from "@/app/model/projectDBModel";
import { SkillProject } from "@/app/model/skillProjectModel";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import TitleProjectCard from "../../../components/TitleCard";
import DescriptionCard from "../../../components/DescriptionCard";
import axiosInstance from "@/app/services/apiInstance";
import { getAuthToken } from "@/app/services/authService";
import { ProjectFR } from "@/app/model/projectFRModel";
import { getProjectsFromDB } from "@/app/services/projectsService";
import ModalPage from "@/app/modals/ModalPage";
import ModalLoading from "@/app/modals/ModalLoading";
import { error } from "console";
import ModalMessage from "@/app/modals/ModalMessage";

const NewProjects = () => {
  const [projectData, setProjectData] = useState<ProjectFR[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [findedError, setFindedError] = useState<boolean>(false);

  const getProjectsDataFromDB = async () => {
    const data: ProjectFR[] = await getProjectsFromDB();
    setProjectData(data);
  };

  return (
    <>
      {loading && findedError && (
        <ModalPage>
          <>
            {loading && <ModalLoading />}
            {findedError && (
              <ModalMessage
                action={() => setFindedError(false)}
                title={"ERROR 404"}
                message={"Error encontrado! vuevle mas tarde"}
              />
            )}
          </>
        </ModalPage>
      )}
      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-[900px] my-10 flex justify-start">
          <TitlePage text={"New Projects"} />
        </div>
        <section className="w-full h-full flex flex-col justify-center items-center">
          {projectData.map((item, index) => (
            <Card key={index}>
              <>
                <TitleProjectCard titleText={item.title} />
                <DescriptionCard descriptionText={item.description} />
                <ProjectCardFooter
                  id={index + 1}
                  project={item}
                  buttonData={NEW_PROJECTS_BUTTON_STYLE}
                />
              </>
            </Card>
          ))}
        </section>
      </section>
    </>
  );
};

export default NewProjects;
