import TitleCard from "@/app/components/TitleCard";
import TitlePage from "@/app/components/TitlePage";
import React from "react";

interface Props {
  sectionText: string;
  children: React.ReactNode;
}

const ApplySection = ({ sectionText, children }: Props) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="ml-5 mt-4">
        <TitleCard titleText={sectionText} />
      </div>
      <div className="m-1 ml-5 mt-2 p-1 flex flex-row flex-wrap">
        {children}
      </div>
    </div>
  );
};

export default ApplySection;
