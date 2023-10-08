"use client";
import Card from "@/app/components/Card";
import ProjectCardFooter from "@/app/components/ProjectCardFooter";
import TitlePage from "@/app/components/TitlePage";
import { NEW_PROJECTS_BUTTON_STYLE } from "@/app/data/projectsButtonData";
import React, { useContext, useEffect, useState } from "react";
import TitleProjectCard from "../../../components/TitleCard";
import DescriptionCard from "../../../components/DescriptionCard";
import { getAuthToken } from "@/app/services/authService";
import { ProjectFR } from "@/app/model/projectFRModel";
import { getProjectsFromDB } from "@/app/services/projectsService";
import ModalPage from "@/app/modals/ModalPage";
import ModalLoading from "@/app/modals/ModalLoading";
import ModalMessage from "@/app/modals/ModalMessage";
import { useRouter } from "next/navigation";
import { StoreContext } from "@/app/store/StoreProvider";

const NewProjects = () => {
  const context: any = useContext(StoreContext);
  const authToken = getAuthToken();
  const [projectsData, setProjectsData] = useState<ProjectFR[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [findedError, setFindedError] = useState<boolean>(false);
  const router = useRouter();

  const getProjectsDataFromDB = async () => {
    try {
      setLoading(true);
      const data: ProjectFR[] = await getProjectsFromDB();
      setProjectsData(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectsDataFromDB();
  }, [authToken]);

  return (
    <>
      {(loading || findedError) && (
        <ModalPage>
          <>
            {loading && <ModalLoading />}
            {findedError && (
              <ModalMessage
                action={() => setFindedError(false)}
                title={"ERROR 404"}
                message={
                  "An error was finded, come back later and try it again!"
                }
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
          {projectsData.map((item, index) => (
            <Card key={index}>
              <>
                <TitleProjectCard titleText={item.title} />
                <DescriptionCard descriptionText={item.description} />
                <ProjectCardFooter
                  project={item}
                  action={() => {
                    context.setApplyData(item);
                    router.push(`/home/new-projects/apply/${item.id}`);
                  }}
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
