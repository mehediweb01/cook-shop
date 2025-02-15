import Image from "next/image";
import React from "react";

const HomeSearch = () => {
  return (
    <div className="-mt-16 flex items-center gap-2.5 border border-slate-400 rounded-t-[10px]">
      <Image
        src="/search.gif"
        alt="search"
        height={17}
        width={17}
        className="hover:cursor-pointer ms-2"
      />
      <input
        type="text"
        placeholder={"Search..."}
        className="bg-transparent focus:outline-none text-primary text-xs w-full focus:border-[#FF7A00] border border-white py-1 rounded-t-[10px] px-2"
      />
    </div>
  );
};

export default HomeSearch;
