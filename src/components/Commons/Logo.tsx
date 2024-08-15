import React from "react";
import TransitionLink from "./TransitionLink";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  ref?: React.MutableRefObject<HTMLAnchorElement | null>;
  id?: string;
  className?: string;
  toggleMenu?: any;
}
export default function Logo({ref, id, className, toggleMenu}:Readonly<LogoProps>) {
  return (
    <TransitionLink
      href={"/"}
      ref={ref}
      id={id}
      onClick={toggleMenu}
      className={cn(
        "flex-none hover:scale-105 group-hover:scale-105 transition-all duration-300 ease-in-out flex items-center space-x-2.5",
        className
      )}
    >
      <Image
        src={"/logo/favicon.jpeg"}
        alt={"Pure Earth Logo"}
        className="flex-none w-14 h-14 lg:w-16 lg:h-16 object-fit overflow-hidden rounded-lg"
        height={64}
        width={64}
      />
      <span className="hidden lg:block font-bold text-xl lg:text-2x; xl:text-3xl">
        PUREEARTH
      </span>
    </TransitionLink>
  );
}
