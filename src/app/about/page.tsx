"use client"

import Hero from "@/components/Commons/Hero";
import AboutComponent from "@/components/sections/about/About";
import Commitment from "@/components/sections/home/Commitment";
import React from "react";

export default function About() {
  return (
    <main className="w-screen min-h-screen">
      <Hero image={"/about/hero.jpg"} pageTitle={"About"} />
      <AboutComponent />
      <Commitment />
    </main>
  );
}
