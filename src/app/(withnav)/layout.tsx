import { IChildren } from "@/interface";
import React, { FC } from "react";
import { Footer, Navbar } from "@/components/shared";

const layout: FC<IChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
