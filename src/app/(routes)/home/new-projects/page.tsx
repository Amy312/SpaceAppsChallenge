"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/app/services/apiInstance";
import { getAuthToken } from "@/app/services/authService";
import TitlePage from "@/app/components/TitlePage";
import Card from "@/app/components/Card";
import TitleCard from "@/app/components/TitleCard";
import DescriptionCard from "@/app/components/DescriptionCard";
import ProjectCardFooter from "@/app/components/ProjectCardFooter";
import { NEW_PROJECTS_BUTTON_STYLE } from "@/app/data/projectsButtonData";
import { stringToSkillArray } from "@/app/helpers/stringSkillArrayHelper";
import { projectBackendToFrontend } from "@/app/interfaces/projectInterface";
import ModalPage from "@/app/modals/ModalPage";
import ModalLoading from "@/app/modals/ModalLoading";
import ModalMessage from "@/app/modals/ModalMessage";

const NewProjects = () => {
  // Obtiene el token de autenticación
  const [projectsDataDB, setProjectsDataDB] = useState<any[]>([]);
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const authToken = getAuthToken();

  

  useEffect(() => {
    const getDATA = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/projects");
        const auxData = response.data.map((item: any) => projectBackendToFrontend(item));
        setProjectsData(auxData);
        setLoading(false);
      } catch (err:any) {
        setLoading(false);
        setError(true);

      } finally {
        setLoading(false);
      }
    };
    
    getDATA();
  }, [authToken, projectsData.length]);

  return (
    <>
      {(loading || error) && (
      <ModalPage>
        <>
          {loading && <ModalLoading />}
          {error && (
            <ModalMessage
              action={() => setError(false)}
              title={"ERROR 404"}
              message={"Error founded! Try it later"}
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
          {projectsData.map((item: any, index: any) => (
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
  )
}

export default NewProjects;
