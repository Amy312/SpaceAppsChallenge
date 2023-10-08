"use client";
import Card from "@/app/components/Card";
import TitlePage from "@/app/components/TitlePage";
import { StoreContext } from "@/app/store/StoreProvider";
import TitleProjectCard from "../../../../../components/TitleCard";
import DescriptionCard from "../../../../../components/DescriptionCard";
import React, { useContext } from "react";
import ApplyFooter from "../components/ApplyFooter";
import ProposalCard from "../components/ProposalCard";
import TitleCard from "../../../../../components/TitleCard";

const Apply = () => {
  const context: any = useContext(StoreContext);

  // id: 0,
  // title: "",
  // description: "",
  // skill: [],
  // duration: new Date(),
  // linkedinCreator: "",

  const { title, description } = context.applyData;

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-[900px] my-10 flex justify-between items-center">
        <TitlePage text={"Apply in the project"} />
      </div>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <Card>
          <>
            <div className="mb-3 ml-5 p-5 pb-0">
              <TitleCard titleText={title} />
            </div>
            <div className="mx-10">
              <DescriptionCard descriptionText={description} />
            </div>
            <ApplyFooter applyData={context.applyData} />
          </>
        </Card>
        <ProposalCard />
      </section>
    </section>
  );
};

export default Apply;
