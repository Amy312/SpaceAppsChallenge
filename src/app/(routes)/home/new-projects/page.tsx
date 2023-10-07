"use client";
import Card from "@/app/components/Card";
import ProjectCardFooter from "@/app/components/ProjectCardFooter";
import SkillsList from "@/app/components/SkillsList";
import { NEW_PROJECTS_BUTTON_STYLE } from "@/app/data/projectsButtonData";
import { ProjectDB } from "@/app/model/projectDBModel";
import { DB_INSTANCE } from "@/app/services/dbInstance";
import useAxios from "axios-hooks";
import React, { useEffect } from "react";

const NewProjects = () => {
  const [{ data, loading, error }] = useAxios(`${DB_INSTANCE}/api/v1/projects`);

  const getProjectsDataDB = async () => {
    console.log("GETTING DATA");
    const projectList: ProjectDB[] = await data;
    console.log("DATA GOTTEN");
    console.log(projectList);
  };

  useEffect(() => {
    getProjectsDataDB();
  }, []);

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <section className="w-full h-full flex justify-center">
      <Card
        titleText={"Title of a Project that a random published"}
        descriptionText={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eligendi tenetur quidem nobis reprehenderit culpa repellendus eaque architecto, saepe eius iste explicabo. Aliquam fugiat, neque minima magni repellendus harum!"
        }
      >
        <>
          <SkillsList listSkills={[]} />
          <ProjectCardFooter buttonData={NEW_PROJECTS_BUTTON_STYLE} />
        </>
      </Card>
    </section>
  );
};

export default NewProjects;
