"use client";

import React from "react";
import Logo from "../Commons/Logo";
import { IoIosCall } from "react-icons/io";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaCertificate, FaSquareXTwitter } from "react-icons/fa6";
import { LuShip } from "react-icons/lu";
import TransitionLink from "../Commons/TransitionLink";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { GrInstagram } from "react-icons/gr";
import { RiCloseLargeFill, RiLinkedinFill } from "react-icons/ri";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { animateMenuClose, animateMenuOpen } from "@/utils/Animations";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useStore } from "@/hooks/useStore";

export default function Menu() {
  const { scrollY } = useScroll();
  const [hideNav, setHideNav] = React.useState(false);
  const [previousHeight, setPreviousHeight] = React.useState(0);
  const [transparent, setTransparent] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const heightOfHeadElement = useStore((state: any) => state.heightOfHeadElement)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    setPreviousHeight(latest);
    if (latest > prev!) {
      gsap.to("#logo", {
        x: -1000,
        duration: 0.4,
        ease: "back.in"
      })
      gsap.to("#menu", {
        x: 1000,
        duration: 0.4,
        ease: "back.in"
      })
      setHideNav(true);
    } else if (latest < prev!) {
      gsap.to("#logo", {
        x: 0,
        duration: 0.3,
        ease: "back.out"
      })
      gsap.to("#menu", {
        x: 0,
        duration: 0.3,
        ease: "back.out"
      })
      setHideNav(false);
    }

    if (latest < heightOfHeadElement) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    
    if (isMenuOpen) {
      animateMenuOpen();
    } else {
      animateMenuClose();
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);
  
  React.useEffect(() => {
    console.log("nav", heightOfHeadElement);
    if (heightOfHeadElement > 1 && previousHeight < heightOfHeadElement) {
      setTransparent(true);
    }
  }, [heightOfHeadElement, previousHeight])

  return (
    <header
      className={`z-50 fixed top-0 left-0 w-screen  duration-300 transition-all ease-in-out pt-3 pb-3 ${transparent ? "bg-transparent text-light" : "text-dark"}`}
    >
      <div className={`mix-blend-exclusion bg-blend-exclusion w-full container flex items-center justify-between`}>
        <Logo toggleMenu={!setIsMenuOpen} className="" id="logo" />

        <button id="menu" onClick={toggleMenu} className="flex items-center space-x-2.5 duration-300 ease-in-out transition-color hover:text-lime-600">
            <HiOutlineMenuAlt4 className="w-9 h-9" />
            <span className="hidden lg:block uppercase font-semibold">menu</span>
            <span className="sr-only">Open Menu</span>
        </button>
      </div>

      <div id="overlay" className={`text-dark menu-overlay overlay-clip pt-3 pb-3 w-screen flex flex-col h-screen overflow-y-auto scrollbar-none bg-lightTertiary fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden`}>
        <div className={`w-full h-fit container flex items-center justify-between pb-3 border-b border-b-lime-600`}>
          <Logo toggleMenu={toggleMenu} />

          <button onClick={toggleMenu} className="flex items-center space-x-2.5">
              <RiCloseLargeFill className="w-9 h-9 duration-300 ease-in-out transition-color hover:text-red-600" />
              <span className="sr-only">Close Menu</span>
          </button>
        </div>

        <div className="text-dark container relative w-full h-full flex flex-col flex-start lg:space-y-4 pt-6 lg:pt-36 mx-auto">
             <TransitionLink
              href="/"
              onClick={toggleMenu}
              className="menu-link hover:ml-6 w-fit p-2.5 text-xl lg:text-3xl 2xl:text-5xl font-semibold lg:font-bold hover:text-lime-600 duration-300 ease-in-out transition-all"
            >
              Home
            </TransitionLink>
            <TransitionLink
              href="/about"
              onClick={toggleMenu}
              className="menu-link hover:ml-6 w-fit p-2.5 text-xl lg:text-3xl 2xl:text-5xl font-semibold lg:font-bold hover:text-lime-600 duration-300 ease-in-out transition-all"
            >
              About
            </TransitionLink>
            <TransitionLink
              href="/minerals"
              onClick={toggleMenu}
              className="menu-link hover:ml-6 w-fit p-2.5 text-xl lg:text-3xl 2xl:text-5xl font-semibold lg:font-bold hover:text-lime-600 duration-300 ease-in-out transition-all"
            >
              Minerals
            </TransitionLink>
            <TransitionLink
              href="/consultancy"
              onClick={toggleMenu}
              className="menu-link hover:ml-6 w-fit p-2.5 text-xl lg:text-3xl 2xl:text-5xl font-semibold lg:font-bold hover:text-lime-600 duration-300 ease-in-out transition-all"
            >
              Consultancy
          </TransitionLink>

          <Image id="menu-img" className="absolute top-[64%] lg:top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 -z-30 mix-blend-luminosity rounded-full h-42 w-42" src={"/deposit.jpeg"} alt={"mineral deposit"} width={720} height={720} />
          
          <div className="absolute top-8 right-6 lg:right-0 flex flex-col items-center space-y-2 py-2">
            <Link href="https://instaram.com/" className="social-link hover:text-dark duration-300 transition-all ease-in-out text-sm text-lime-600 flex items-center"><GrInstagram className="w-5 h-5 flex-none" /></Link>
            <Link href="https://x.com/" className="social-link hover:text-dark duration-300 transition-all ease-in-out text-sm text-lime-600 flex items-center"><FaSquareXTwitter className="w-5 h-5 flex-none" /></Link>
            <Link href="https://linkedin.com/" className="social-link hover:text-dark duration-300 transition-all ease-in-out text-sm text-lime-600 flex items-center"><RiLinkedinFill className="w-5 h-5 flex-none" /></Link>
          </div>

            <div className="absolute bottom-0 left-0 right-0 overflow-x-auto border-t border-t-lime-600 flex items-center space-x-6 lg:space-x-10 pt-3 p-4 w-full divider-2-dark divider scrollbar-none">
              <div className="info duration-300 transition-all hover:scale-110 cursor-pointer flex items-center space-x-2.5 w-fit flex-none">
              <IoIosCall className="w-9 h-9 text-lime-600" />
              <div className="flex flex-col space-y-1">
                <span className="text-xl font-bold text-nowrap">Direct Line</span>
                <span className="text-base font-normal text-nowrap">+234 810 909 5909</span>
              </div>
            </div>
            <div className="info duration-300 transition-all hover:scale-110 cursor-pointer flex items-center space-x-2.5 w-fit flex-none">
              <HiMiniBuildingOffice2 className="w-9 h-9 text-lime-600" />
              <div className="flex flex-col space-y-1">
                <span className="text-xl font-bold text-nowrap">Open Hours</span>
                <span className="text-base font-normal uppercase text-nowrap">
                  Mon-Fri | 8am - 4pm
                </span>
              </div>
            </div>
            <div className="info duration-300 transition-all hover:scale-110 cursor-pointer flex items-center space-x-2.5 w-fit flex-none">
              <FaCertificate className="w-9 h-9 text-lime-600" />
              <div className="flex flex-col space-y-1">
                <span className="text-xl font-bold text-nowrap">RC Number</span>
                <span className="text-base font-normal">123456</span>
              </div>
            </div>
            <div className="info duration-300 transition-all hover:scale-110 cursor-pointer flex items-center space-x-2.5 w-fit flex-none">
              <LuShip className="w-9 h-9 text-lime-600" />
              <div className="flex flex-col space-y-1">
                <span className="text-xl font-bold text-nowrap">Export License</span>
                <span className="text-base font-normal">098765</span>
              </div>
            </div>
            </div>
        </div>
      </div>
    </header>
  );
}
