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
  const authToken = getAuthToken();
  const [projectsData, setProjectsData] = useState<ProjectFR[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [findedError, setFindedError] = useState<boolean>(false);

  const getProjectsDataFromDB = async () => {
    try {
      const data: ProjectFR[] = await getProjectsFromDB();
      setProjectsData(data);
    } catch (error) {
      console.log("ERROR ENCONTRADO");
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectsDataFromDB();
  }, [authToken]);
  // const [projectsData, setProjectsData] = useState<ProjectFR[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const authToken = getAuthToken();

  // useEffect(() => {
  //   setLoading(true);
  //   setError(null);

  //   axiosInstance
  //     .get("/projects")
  //     .then((response) => {
  //       setProjectsData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, [authToken]);

  // console.log(projectsData);

  return (
    <>
      {/* {loading && findedError && (
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
      )} */}
      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-[900px] my-10 flex justify-start">
          <TitlePage text={"New Projects"} />
        </div>
        <section className="w-full h-full flex flex-col justify-center items-center">
          {projectsData.map((item, index) => (
            <Card key={index}>
              <>
                <TitleCard titleText={item.title} />
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
