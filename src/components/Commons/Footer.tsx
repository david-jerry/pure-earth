import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-screen bg-darkSecondary text-lightTertiary">
      <div className="py-24 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 lg:gap-14 pt-4">
        <div className="space-y-2">
          <strong className="font-bold text-white text-2xl">PURE EARTH</strong>
          <p className="text-sm font-normal">
            We are mineral resource experts, specializing in the sourcing and
            export of high-quality solid minerals. Leveraging our extensive
            global trade network, we connect buyers with the best possible
            products at competitive prices.
          </p>
        </div>

        <div className="flex flex-col items-start lf:items-center border-t-2 border-t-lime-600 pt-4">
          <strong className="font-bold text-2xl">SERVICES</strong>
          <li className="ml-4 pt-6 hover:text-lime-600 duration-300 ease-in-out">
            Mineral Export
          </li>
          <li className="ml-4 hover:text-lime-600 duration-300 ease-in-out">
            Mineral Mining
          </li>
          <li className="ml-4 hover:text-lime-600 duration-300 ease-in-out">
            Consultation
          </li>
        </div>

        <div className="flex flex-col items-start lf:items-center border-t-2 border-t-lime-600 pt-4">
          <strong className="font-bold text-2xl">GET IN TOUCH</strong>
          <li className="pt-6 flex items-center space-x-2.5 hover:text-lime-600 duration-300 ease-in-out">
            <FaLocationArrow className="w-4 h-4 flex-none" />
            <span className="block text-sm">
              Walure Building, Plot 75, Block 3B, Ogunnusi Rd, Grammar School
              Bus Stop, Ojodu Berger, Lagos, Nigeria.
            </span>
          </li>
          <li className="pt-6 flex items-center space-x-2.5 hover:text-lime-600 duration-300 ease-in-out">
            <FaPhone className="w-4 h-4 flex-none" />
            <span className="block text-sm">
              +234-810 909 5909
            </span>
          </li>
          <li className="pt-6 flex items-center space-x-2.5 hover:text-lime-600 duration-300 ease-in-out">
            <MdEmail className="w-4 h-4 flex-none" />
            <span className="block text-sm">
              consult@pureearth.com.ng
            </span>
          </li>
        </div>
      </div>
      <div className="w-screen bg-black text-center text-white text-sm py-6">
        <span className="block">© 2024 Pure Earth. All Rights Reserved.</span>
        <span className="text-lime-600 font-bold text-sm">Designed and Maintained by ByteStream Innovators Limited</span>
      </div>
    </footer>
  );
}
