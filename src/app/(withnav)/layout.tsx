import Navbar from "@/components/shared/navbar";
import React, { FC } from "react";

type IRootProps = Readonly<{
  children: React.ReactNode;
}>;
const layout: FC<IRootProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
