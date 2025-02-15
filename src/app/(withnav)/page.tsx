import HomeSearch from "@/components/pages/home";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex items-start justify-center min-h-[66svh]">
      <div className="flex flex-col -mt-10 mx-4">
        <Image src="/logo.png" alt="logo" height={200} width={350} />
        <HomeSearch />
      </div>
    </div>
  );
};

export default HomePage;
