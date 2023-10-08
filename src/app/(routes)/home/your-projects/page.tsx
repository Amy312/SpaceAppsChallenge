"use client";
import Card from "@/app/components/Card";
import DescriptionCard from "@/app/components/DescriptionCard";
import ProjectCardFooter from "@/app/components/ProjectCardFooter";
import TitleCard from "@/app/components/TitleCard";
import TitlePage from "@/app/components/TitlePage";
import { SEE_APLICANTS_BUTTON_STYLE } from "@/app/data/projectsButtonData";
import { projectBackendToFrontend } from "@/app/interfaces/projectInterface";
import ModalLoading from "@/app/modals/ModalLoading";
import ModalMessage from "@/app/modals/ModalMessage";
import ModalPage from "@/app/modals/ModalPage";
import axiosInstance from "@/app/services/apiInstance";
import { getAuthToken } from "@/app/services/authService";
import React, { useEffect, useState } from "react";

const YourProjects = () => {
  const [projectsDataDB, setProjectsDataDB] = useState<any[]>([]);
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const authToken = getAuthToken();

  

  useEffect(() => {
    const getDATA = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/user-projects");
        // const auxData = response.data.map((item: any) => projectBackendToFrontend(item));
        // setProjectsData(auxData);
        console.log(response)
        setLoading(true);
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
      <div className="w-[900px] my-10 flex justify-between items-center">
        <TitlePage text={"Your Projects"} />
        <div className="flex items-center space-x-3">
          <p className="font-principal">Do you want to publish a project?</p>
          <button className="font-principal bg-[#47576E] h-10 px-4 hover:opacity-50 rounded-lg text-white font-semibold">
            Publish Project
          </button>
        </div>
      </div> 
      <section className="w-full h-full flex flex-col justify-center items-center">
        <Card key={1}>
          <>
            <TitleCard titleText={"Hugo's StartUp"} />
            <DescriptionCard
              descriptionText={"Hugo and Paul decided to explore the world!"}
            />
            <ProjectCardFooter
              id={1}
              project={{
                id: 1,
                title: "Sample Project",
                description: "This is a sample project",
                skill: [
                  {
                    text: "Hugotrucos",
                  },
                  {
                    text: "Paul Algorithms",
                  },
                ],
                duration: new Date(),
                linkedinCreator: "John Doe",
              }}
              buttonData={SEE_APLICANTS_BUTTON_STYLE}
            />
          </>
        </Card>
      </section>
      <section className="w-full h-full flex flex-col justify-center items-center"></section>
    </section>
    </>
  );
};

export default YourProjects;
