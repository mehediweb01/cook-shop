import { IChildren } from "@/interface";
import React, { FC } from "react";
import { Navbar } from "@/components/shared";


const layout: FC<IChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
