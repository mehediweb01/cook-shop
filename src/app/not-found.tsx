import { Navbar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-2 bg-black/5">
        <h2 className="text-2xl sm:text-4xl text-slate-700 font-fredoka font-bold">
          Not Found !!
        </h2>
        <p className="font-fredoka text-base sm:text-xl text-slate-700 font-medium sm:max-w-full ">
          Could not find requested resource
        </p>
        <Link
          href="/"
          className="bg-[#fafa] rounded-[10px] hover:text-white hover:bg-slate-700 transition-all duration-200 font-fredoka tracking-[2px] text-base sm:text-xl"
        >
          <Button className="rounded-[10px]">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
