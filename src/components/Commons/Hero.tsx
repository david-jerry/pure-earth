"use client"

import { useStore } from "@/hooks/useStore";
import Image from "next/image";
import React from "react";

export default function Hero({
  image,
  pageTitle,
}: {
  image: string;
  pageTitle: string;
}) {
  const heroRef = React.useRef<HTMLDivElement>(null);

  const setHeightOfHeadElement = useStore(
    (state: any) => state.setHeightOfHeadElement
  );

  React.useEffect(() => {
    if (heroRef.current) {
      setHeightOfHeadElement(heroRef.current.offsetHeight);
      console.log("About", heroRef.current.offsetHeight)
    }
  }, [setHeightOfHeadElement]);

  return (
    <div className="w-screen h-[20vh] relative overflow-hidden" ref={heroRef}>
      <Image src={image} alt={pageTitle} height={450} width={1900} className="object-cover object-center w-full h-full" />
      <div className="z-50 w-full h-full absolute right-0 left-0 top-0 bottom-0 bg-dark/60"></div>
      <div className="w-full h-full flex flex-col items-center justify-center z-10">
        <h1 className="block w-fit text-lightSecondary text-3xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  );
}
