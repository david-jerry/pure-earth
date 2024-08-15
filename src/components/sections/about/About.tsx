import React from "react";

export default function AboutComponent() {
  return (
    <section className="w-screen py-16">
      <div className="container flex flex-col lg:items-start items-center space-y-4">
        <h3 className="text-4xl font-bold">About</h3>
        <div className="space-y-1">
          <div className="w-14 h-1 5 bg-dark"></div>
          <div className="w-24 h-1 5 bg-lime-600"></div>
        </div>
        <p className="text-lg">
          <strong className="font-bold">Pure Earth</strong> is a Nigerian mining
          and export company committed to building enduring partnerships with
          international trading companies. Our core values of integrity,
          reliability, and excellence drive us to deliver superior quality
          mineral resources to global markets.
          <br/><br/>
          With a deep understanding of the global commodities landscape, we
          specialize in the efficient and responsible export of Nigeria’s rich
          mineral wealth. Our operations are underpinned by a strong commitment
          to safety, environmental stewardship, and sustainable development.
          <br/><br/>
          We offer our clients a competitive advantage through consistent
          product quality, timely deliveries, and transparent business
          practices. By fostering long-term relationships built on trust and
          mutual benefit, Pure Earth aims to be the preferred partner for mining
          and export solutions in Nigeria.
        </p>
      </div>
    </section>
  );
}
