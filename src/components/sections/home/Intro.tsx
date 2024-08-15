"use client";

import React from "react";
import { introAnimation, introAnimationReverse } from "@/utils/Animations";

export default function Intro() {
  React.useEffect(() => {
    introAnimation();
    introAnimationReverse();
  }, []);

  return (
    // ref={ref}
    <section className="w-screen py-14">
      <div className="space-y-6 lg:space-y-0 lg:space-x-6 container mx-auto flex flex-col lg:flex-row items-center  justify-between">
        <div
          id="caption"
          className="relative order-2 lg:order-1 text-base text-dark text-balance"
        >
          <div className="absolute top-0 left-0 space-y-1">
            <div className="w-14 h-1 5 bg-dark"></div>
            <div className="w-24 h-1 5 bg-lime-600"></div>
          </div>
          <p className="pt-16">
            We are mineral resource experts, specializing in the sourcing and
            export of high-quality solid minerals. Leveraging our extensive
            global trade network, we connect buyers with the best possible
            products at competitive prices. Our commitment to quality,
            reliability, and customer satisfaction sets us apart. We build
            strong, long-term partnerships based on trust and transparency,
            ensuring secure and efficient transactions. Whether you seek to
            purchase or sell solid minerals, we offer the expertise and
            resources to meet your needs.
          </p>
        </div>

        <h2
          id="intro"
          className="splitting-text order-1 lg:order-2 font-bold text-[130px] lg:text-[156px] text-pretty text-dark underline-offset-2 flex items-center"
        >
          Intro
        </h2>
      </div>
    </section>
  );
}
