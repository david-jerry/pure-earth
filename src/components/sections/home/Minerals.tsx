"use client"

import Cards from "@/components/Commons/Cards";
import React from "react";

export default function Minerals() {
  return (
    <section className="w-screen bg-gray-200 text-dark py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Cards
          title={"Reliable Quality Coal"}
          image={"/minerals/backdrops/coal.jpg"}
          sections={[
            {
              heading: "Our Coal",
              links: [
                {
                  title: "Low Impurities",
                  detail: "We offer coal with minimal ash, sulfur, and moisture content, minimizing environmental impact and equipment wear.",
                },
                {
                  title: "Consistent Quality",
                  detail: "Our rigorous quality control processes guarantee a consistent product, meeting your exact specifications.",
                },
                {
                  title: "High Calorific Value",
                  detail: "Our coal boasts exceptional energy density, ensuring maximum efficiency for your operations.",
                },
                {
                  title: "Diverse Grades",
                  detail: "We offer a range of coal grades to suit various industrial applications.",
                },
              ],
            },
          ]}
          intro="PureEarth is a leading provider of premium coal minerals for the global market. With a strong commitment to quality, sustainability, and customer satisfaction, we deliver reliable coal solutions to power industries worldwide."
        />
        <Cards
          title={"High-Grade Iron Ore"}
          image={"/minerals/backdrops/ore.jpg"}
          sections={[
            {
              heading: "Our Iron Ore",
              links: [
                {
                  title: "Rich Iron Content",
                  detail: "Our iron ore boasts exceptional iron content, maximizing yield and efficiency.",
                },
                {
                  title: "Consistent Quality",
                  detail: "Rigorous quality control ensures consistent product specifications, meeting industry standards.",
                },
                {
                  title: "Reliable Supply",
                  detail: "Our extensive mining operations and efficient logistics guarantee a steady supply.",
                },
                {
                  title: "Sustainability Focus",
                  detail: "We prioritize environmentally responsible mining practices and reclamation.",
                },
              ],
            },
          ]}
          intro="PureEarth is a leading exporter of high-quality iron ore, serving the global steel industry. With a steadfast commitment to quality, reliability, and sustainability, we deliver iron ore solutions that power industrial growth."
        />
        <Cards
          title={"Pure Gold"}
          image={"/minerals/backdrops/gold.jpg"}
          sections={[
            {
              heading: "Our Gold",
              links: [
                {
                  title: "Competitive Pricing",
                  detail: "Benefit from our competitive market rates and transparent pricing structure.",
                },
                {
                  title: "Financial Stability",
                  detail: "Our strong financial position ensures reliability and trust.",
                },
                {
                  title: "Compliance and Ethics",
                  detail: "We prioritize compliance with international regulations and ethical sourcing practices.",
                },
                {
                  title: "Uncompromising Quality",
                  detail: "We adhere to the highest purity standards, backed by independent assays.",
                },
              ],
            },
          ]}
          intro="PureEarth is your trusted partner in the gold export industry. With a deep-rooted commitment to quality, reliability, and ethical sourcing, we offer unparalleled access to pure gold bullion."
        />
      </div>
    </section>
  );
}
