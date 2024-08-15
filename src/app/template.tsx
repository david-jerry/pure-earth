"use client"

import { animateTransitionPageIn } from "@/utils/Animations";
import Image from "next/image";
import { useEffect } from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    animateTransitionPageIn();
  }, [])

  return (
      <div className="w-screen min-h-screen relative z-30 flex flex-col items-center justify-center overflow-hidden">
          <div id="animation-1" className="h-screen bg-dark z-10 fixed w-1/3 top-0 left-0">
          </div>
          <div id="animation-2" className="h-screen bg-dark z-10 fixed w-1/3 top-0 left-1/3">
          </div>
          <div id="animation-3" className="h-screen bg-dark z-10 fixed w-1/3 top-0 left-2/3">
          </div>
          <Image className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-40" src={"/minerals/crystal.svg"} alt={"earth's crystal deposit"} width={200} height={200} id="animation-logo" />
        {children}
      </div>      
  );
}