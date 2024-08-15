"use client"

import Hero from '@/components/Commons/Hero'
import ContactForm from '@/components/Contact/Form'
import Commitment from '@/components/sections/home/Commitment'
import React from 'react'

export default function ConsultancyPage() {
  return (
    <main className="w-screen min-h-screen">
      <Hero image={"/about/hero.jpg"} pageTitle={"Consultancy"} />
      <ContactForm />
      <Commitment />
    </main>
  )
}
