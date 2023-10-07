"use client";
import Card from "@/app/components/Card";
import ProjectCardFooter from "@/app/components/ProjectCardFooter";
import SkillsList from "@/app/components/SkillsList";
import TitleCard from "@/app/components/TitleCard";
import TitlePage from "@/app/components/TitlePage";
import { NEW_PROJECTS_BUTTON_STYLE } from "@/app/data/projectsButtonData";
import { ProjectDB } from "@/app/model/projectDBModel";
import { SkillProject } from "@/app/model/skillProjectModel";
import { DB_INSTANCE } from "@/app/services/dbInstance";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/app/services/apiInstance";
import { getAuthToken } from "@/app/services/authService";

const NewProjects = () => {
  // const [{ data, loading, error }] = useAxios(`${DB_INSTANCE}/api/v1/projects`);

  // const getProjectsDataDB = async () => {
  //   console.log("GETTING DATA");
  //   const projectList: ProjectDB[] = await data;
  //   console.log("DATA GOTTEN");
  //   console.log(projectList);
  // };

  // useEffect(() => {
  //   getProjectsDataDB();
  // }, []);

  // if (loading) {
  //   return <p>loading</p>;
  // }
  // if (error) {
  //   return <p>error</p>;
  // }

  const PROVISIONAL_LIST: SkillProject[] = [
    {
      text: "react js",
    },
    {
      text: "angular js",
    },
    {
      text: "next js",
    },
    {
      text: "vue js",
    },
    {
      text: "nuxt js",
    },
    {
      text: "svelte js",
    },
    {
      text: "react js",
    },
    {
      text: "angular js",
    },
    {
      text: "next js",
    },
    {
      text: "vue js",
    },
    {
      text: "nuxt js",
    },
    {
      text: "svelte js",
    },
  ];

  const PROVE_DATA = [
    {
      titleText: "Title of a Project ONE",
      descriptionText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eligendi tenetur quidem nobis reprehenderit culpa repellendus eaque architecto, saepe eius iste explicabo. Aliquam fugiat, neque minima magni repellendus harum!",
      listSkills: PROVISIONAL_LIST,
    },
    {
      titleText: "Title of a Project TWO",
      descriptionText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eligendi tenetur quidem nobis reprehenderit culpa repellendus eaque architecto, saepe eius iste explicabo. Aliquam fugiat, neque minima magni repellendus harum!",
      listSkills: PROVISIONAL_LIST,
    },
    {
      titleText: "Title of a Project THREE",
      descriptionText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eligendi tenetur quidem nobis reprehenderit culpa repellendus eaque architecto, saepe eius iste explicabo. Aliquam fugiat, neque minima magni repellendus harum!",
      listSkills: PROVISIONAL_LIST,
    },
    {
      titleText: "Title of a Project FOUR",
      descriptionText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eligendi tenetur quidem nobis reprehenderit culpa repellendus eaque architecto, saepe eius iste explicabo. Aliquam fugiat, neque minima magni repellendus harum!",
      listSkills: PROVISIONAL_LIST,
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-[900px] my-10 flex justify-start">
        <TitlePage text={"New Projects"} />
      </div>
      <section className="w-full h-full flex flex-col justify-center items-center">
        {PROVE_DATA.map((item, index) => (
          <Card
            key={index}
            titleText={item.titleText}
            descriptionText={item.descriptionText}
          >
            <>
              <ProjectCardFooter
                buttonData={NEW_PROJECTS_BUTTON_STYLE}
                listSkills={item.listSkills}
              />
            </>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default NewProjects;
