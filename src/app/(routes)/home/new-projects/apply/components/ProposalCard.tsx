"use client";
import TitleCard from "@/app/components/TitleCard";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import ApplyTextTarea from "./ApplyTextTarea";
import ApplyLinkedin from "./ApplyLinkedin";
import GeneralActionButton from "@/app/components/GeneralActionButton";
import { GeneralButton } from "@/app/model/generalButtonModel";
import { APPLY_BUTTON_STYLE } from "@/app/data/applyButtonData";
import { ProposalValidation } from "@/app/model/proposalValidationModel";
import { ERRORS_PROPOSAL_DESCRIPTION } from "@/app/data/errorDescriptionProposalData";
import ErrorText from "./ErrorText";
import { ERRORS_PROPOSAL_LINKEDIN } from "@/app/data/errorLinkedinProposalData";

const ProposalCard = () => {
  const { handleSubmit, register, watch } = useForm<ProposalForm>();

  const description: string = watch("description");
  const linkedin: string = watch("linkedin");

  const [errorDescription, setErrorDescription] = useState<ProposalValidation>(
    ERRORS_PROPOSAL_DESCRIPTION
  );
  const [errorTextDescription, setErrorTextDescription] = useState<string>("");

  const [errorLinkedin, setErrorLinkedin] = useState<ProposalValidation>(
    ERRORS_PROPOSAL_LINKEDIN
  );
  const [errorTextLinkedin, setErrorTextLinkedin] = useState<string>("");

  const BUTTON_DATA: GeneralButton = { ...APPLY_BUTTON_STYLE };
  BUTTON_DATA.action = () => {};

  const whenSumbit = (data: FieldValues) => {
    alert();
  };

  useEffect(() => {
    if (description) {
      const regExpr: RegExp = /^.{1,1000}$/;
      if (!regExpr.test(description)) {
        setErrorTextDescription(errorDescription.errors[0]);
        setErrorDescription({ ...errorDescription, state: true });
      } else {
        setErrorTextDescription("");
        setErrorDescription({ ...errorDescription, state: false });
      }
    } else {
      setErrorTextDescription("");
      setErrorDescription({ ...errorDescription, state: false });
    }
  }, [description, errorDescription]);

  useEffect(() => {
    console.log("linkedin");
    if (linkedin) {
      const regExpr: RegExp =
        /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
      if (!regExpr.test(linkedin)) {
        setErrorTextLinkedin(errorLinkedin.errors[0]);
        setErrorLinkedin({ ...errorLinkedin, state: true });
      } else {
        setErrorTextLinkedin("");
        setErrorLinkedin({ ...errorLinkedin, state: false });
      }
    } else {
      setErrorTextLinkedin("");
      setErrorLinkedin({ ...errorLinkedin, state: false });
    }
  }, [errorLinkedin, linkedin]);

  return (
    <form
      onSubmit={handleSubmit((data: FieldValues) => whenSumbit(data))}
      className="w-[900px] h-max m-1 p-5 flex flex-col rounded-tl-3xl rounded-b-3xl border-2 border-[#60656B] shadow-md
  mb-5"
    >
      <div className="mb-3">
        <TitleCard titleText={"Your Proposal"} />
      </div>
      {errorDescription.state && <ErrorText text={errorTextDescription} />}
      <ApplyTextTarea register={register} />
      <div className="flex flex-col mt-5">
        <TitleCard titleText={"Linkedin Profile"} />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            {errorLinkedin.state && <ErrorText text={errorTextLinkedin} />}
            <ApplyLinkedin register={register} />
          </div>
          <div className="mr-5">
            <GeneralActionButton buttonData={BUTTON_DATA} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProposalCard;
