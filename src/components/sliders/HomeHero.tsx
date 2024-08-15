"use client";

import Image from "next/image";
import React from "react";
import slides from "@/data/home_slider.json";
import { useStore } from "@/hooks/useStore";
import { clickedSlideAnimation } from "@/utils/Animations";
import TransitionLink from "../Commons/TransitionLink";

export default function HomeHero() {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentIndex2, setCurrentIndex2] = React.useState(1);
  const totalSlides = slides.minerals.length;
  const [nextSlides, setNextSlides] = React.useState(
    slides.minerals.slice(currentIndex2, currentIndex2 + 3)
  );
  const setHeightOfHeadElement = useStore(
    (state: any) => state.setHeightOfHeadElement
  );
  const heightOfHeadElement = useStore(
    (state: any) => state.heightOfHeadElement
  );

  React.useEffect(() => {
    if (sliderRef.current) {
      setHeightOfHeadElement(sliderRef.current.offsetHeight);
      console.log("homeSlider", heightOfHeadElement)
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // const updateNextSlides = () => {
  //   // Calculate new start and end indices
  //   const newStartIndex = (currentIndex2 + 1) % totalSlides;
  //   const newEndIndex = (newStartIndex + 3) % totalSlides;

  //   // Determine the next slides, wrapping around if necessary
  //   const newSlides =
  //     newEndIndex > newStartIndex
  //       ? slides.minerals.slice(newStartIndex, newEndIndex)
  //       : [
  //           ...slides.minerals.slice(newStartIndex, totalSlides),
  //           ...slides.minerals.slice(0, newEndIndex),
  //         ];

  //   setNextSlides(newSlides);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  //   setCurrentIndex2((prevIndex) => (prevIndex + 1) % totalSlides);
  //   updateNextSlides();
  // };

  const updateNextSlides = (startIndex: number) => {
    const newSlides = Array.from({ length: 3 }).map((_, idx) => {
      return slides.minerals[(startIndex + idx) % totalSlides];
    });

    setNextSlides(newSlides);
  };

  const nextSlide = (id?: number) => {
    let startIndex = currentIndex2;
    // If an ID is passed, find its index
    if (id) {
      const foundIndex = slides.minerals.findIndex((slide) => slide.id === id);
      if (foundIndex !== -1) {
        startIndex = foundIndex;
      }
    }

    clickedSlideAnimation(
      setCurrentIndex,
      setCurrentIndex2,
      updateNextSlides,
      startIndex,
      totalSlides
    );
  };

  return (
    <div ref={sliderRef} className="relative w-screen h-screen overflow-hidden">
      <Image
        src={slides.minerals[currentIndex].image}
        alt={slides.minerals[currentIndex].name}
        width={1800}
        height={900}
        className="active-image object-cover w-screen h-screen relative z-0"
      />
      <div className="w-screen h-screen bg-dark/65 absolute left-0 top-0 right-0 bottom-0"></div>

      {/* thumbnails */}
      <div className="lg:rounded-xl px-4 py-5 bg-black/30 container mx-auto flex items-center overflow-x-auto scrollbar-none gap-4 absolute bottom-0 md:bottom-4 lg:bottom-12 lg:right-6 w-full md:w-fit">
        {nextSlides.map((slide, index) => (
          <div
            onClick={() => nextSlide(slide.id)}
            key={index}
            className="relative shadow-md flex-none w-[150px] h-[250px] lg:w-[230px] lg:h-[300px] rounded-xl cursor-pointer hover:scale-y-90 overflow-hidden transition-all ease-in-out duration-300"
          >
            <Image
              className="w-full h-full object-cover"
              src={slide.image}
              alt={slide.name}
              width={340}
              height={500}
            />
            <div className="w-full h-full bg-dark/40 absolute left-0 top-0 right-0 bottom-0"></div>
            <div className="absolute bottom-2 left-2 text-white max-w-32 lg:max-w-52">
              <strong className="text-base font-bold text-lightTertiary">
                {slide.name}
              </strong>
              <p className="text-xs font-normal line-clamp-2 w-full ">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* hero write up */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 w-full">
        <div className="container">
          <div className="max-w-[300px] md:max-w-xl">
            <h1 className="text-6xl lg:text-[120px] font-bold text-light">
              {slides.minerals[currentIndex].name}
            </h1>
            <p className="text-white text-sm lg:text-base">
              {slides.minerals[currentIndex].description}
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <TransitionLink
                href="/minerals"
                className="hover:scale-90 duration-300 ease-in-out transition-all uppercase font-semibold py-2.5 px-4 rounded-md bg-lime-600 text-white"
              >
                Minerals
              </TransitionLink>
              <TransitionLink
                href="/consultancy"
                className="hover:scale-90 duration-300 ease-in-out transition-all uppercase font-semibold py-2.5 px-4 rounded-md bg-dark text-light"
              >
                Contact
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
