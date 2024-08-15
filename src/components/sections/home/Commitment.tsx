import Image from "next/image";
import React from "react";

export default function Commitment() {
  return (
    <section className="w-screen py-16 bg-darkSecondary text-white">
      <div className="container mx-auto grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="w-full group">
          <Image src="/mission.png" alt="mission" width={1200} height={1200} className="duration-300 ease-in-out transition-all w-full aspect-square"/>
        </div>
        <div className="space-y-4 relative col-span-2">
          <div className="absolute top-0 left-0 lg:right-0 space-y-1 flex flex-col lg:items-end">
            <div className="w-14 h-1 5 bg-light"></div>
            <div className="w-24 h-1 5 bg-lime-600"></div>
          </div>
          <h3 className="pt-16 font-bold text-2xl lg:text-4xl text-left lg:text-right">Mission</h3>
          <p className="text-normal lg:text-right text-pretty whitespace-break-spaces">
            Our core values of quality, sustainability, transparency, and
            innovation drive every aspect of our business. We employ rigorous
            quality control measures, from the source to the final product,
            ensuring that our customers receive only the best. We are proud to
            be certified by [Certifications] and have received numerous awards
            for our environmental stewardship.
          </p>
          <p className="text-normal lg:text-right text-pretty whitespace-break-spaces">
            We understand the importance of transparency and accountability. We
            openly report on our operations, environmental impact, and social
            responsibility initiatives. Our commitment to innovation enables us
            to develop sustainable solutions that benefit both our business and
            the planet.
          </p>
        </div>
      </div>
    </section>
  );
}
