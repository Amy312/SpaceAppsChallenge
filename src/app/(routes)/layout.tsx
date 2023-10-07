import React from "react";
import PrincipalLayout from "../layouts/PrincipalLayout";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return <PrincipalLayout>{children}</PrincipalLayout>;
};

export default layout;
