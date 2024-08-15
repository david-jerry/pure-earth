"use client"

import Hero from '@/components/Commons/Hero';
import Commitment from '@/components/sections/home/Commitment';
import { useStore } from '@/hooks/useStore';
import React from 'react'
import Minerals from "@/components/sections/home/Minerals";

export default function MineralsPage() {
  return (
    <main className="w-screen min-h-screen">
      <Hero image={"/about/hero.jpg"} pageTitle={"Minerals"} />
      <Minerals />
      <Commitment />
    </main>
  );
}
