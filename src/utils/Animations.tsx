import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  breakApartText,
  dropFromTop,
  growAnimation,
  hideFromBottomToTop,
  revealFromTopToBottom,
  scaleDown,
  scaleUp,
} from "./AnimationActions";

export const animateTransitionPageIn = () => {
  const transitionBannerOne = document.getElementById("animation-1");
  const transitionBannerTwo = document.getElementById("animation-2");
  const transitionBannerThree = document.getElementById("animation-3");
  const transitionLogo = document.getElementById("animation-logo");

  const targets = [
    transitionBannerOne,
    transitionBannerTwo,
    transitionBannerThree,
  ];

  if (
    transitionBannerOne &&
    transitionBannerTwo &&
    transitionBannerThree &&
    transitionLogo
  ) {
    const tl = gsap.timeline();

    tl.set(transitionLogo, {
      opacity: 1,
    }).to(transitionLogo, {
      opacity: 0,
      display: "none",
      duration: 1.3,
      onComplete: () => {
        tl.set(
          [transitionBannerOne, transitionBannerTwo, transitionBannerThree],
          {
            yPercent: 0,
          }
        ).to(
          [transitionBannerOne, transitionBannerTwo, transitionBannerThree],
          {
            yPercent: 100,
            stagger: 0.3,
          }
        );
      },
    });
  }
};

export const animateTransitionPageOut = (
  href: string,
  router: AppRouterInstance
) => {
  const transitionBannerOne = document.getElementById("animation-1");
  const transitionBannerTwo = document.getElementById("animation-2");
  const transitionBannerThree = document.getElementById("animation-3");
  const transitionLogo = document.getElementById("animation-logo");

  const targets = [
    transitionBannerOne,
    transitionBannerTwo,
    transitionBannerThree,
  ];

  if (
    transitionBannerOne &&
    transitionBannerTwo &&
    transitionBannerThree &&
    transitionLogo
  ) {
    const tl = gsap.timeline();

    tl.set([transitionLogo], {
      opacity: 1,
    }).to([transitionLogo], {
      opacity: 0,
      display: "none",
      onComplete: () => {
        tl.set(
          [transitionBannerOne, transitionBannerTwo, transitionBannerThree],
          {
            yPercent: -100,
          }
        ).to(
          [transitionBannerOne, transitionBannerTwo, transitionBannerThree],
          {
            yPercent: 0,
            stagger: 0.3,
            onComplete: () => {
              router.push(href);
            },
          }
        );
      },
    });
  }
};

export const animateHeaderOut = () => {
  const header = document.getElementById("header");

  if (header) {
    const tl = gsap.timeline();

    tl.set([header], {
      yPercent: 0,
    }).to([header], {
      yPercent: -100,
      stagger: 0.1,
    });

    tl.play();
  }
};

export const animateHeaderIn = () => {
  const header = document.getElementById("header");

  if (header) {
    const tl = gsap.timeline();

    tl.set([header], {
      yPercent: -100,
    }).to([header], {
      yPercent: 0,
      stagger: 0.1,
    });

    tl.play();
  }
};

export const animateLogoOut = () => {
  const logo = document.getElementById("logo");

  if (logo) {
    const tl = gsap.timeline();

    tl.set([logo], {
      xPercent: 0,
    }).to([logo], {
      xPercent: -500,
    });

    tl.play();
  }
};

export const animateLogoIn = () => {
  const logo = document.getElementById("logo");

  if (logo) {
    const tl = gsap.timeline();

    tl.set([logo], {
      xPercent: -500,
    }).to([logo], {
      xPercent: 0,
    });

    tl.play();
  }
};

export const animateMenuIconOpen = () => {
  const menu = document.getElementById("menu");

  if (menu) {
    const tl = gsap.timeline();

    tl.set([menu], {
      xPercent: 0,
    }).to([menu], {
      xPercent: 500,
    });

    tl.play();
  }
};

export const animateMenuIconClose = () => {
  const menu = document.getElementById("menu");

  if (menu) {
    const tl = gsap.timeline();

    tl.set([menu], {
      xPercent: 500,
    }).to([menu], {
      xPercent: 0,
    });

    tl.play();
  }
};

export const animateMenuOpen = () => {
  const overlay = document.getElementById("overlay");
  const links = document.getElementsByClassName("menu-link");
  const socialLinks = document.getElementsByClassName("social-link");
  const businessIds = document.getElementsByClassName("info");
  const menuImage = document.getElementById("menu-img");

  gsap.set(links, { y: 75 });
  gsap.set(socialLinks, { xPercent: 500 });

  if (overlay) {
    const tl = gsap.timeline({ paused: false });

    tl.set([overlay], hideFromBottomToTop).to([overlay], revealFromTopToBottom);

    gsap.to([links], {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75,
    });
    gsap.fromTo(
      menuImage,
      {
        x: 1950,
        rotate: 0,
        duration: 1.5,
      },
      {
        x: 0,
        scale: 0.7,
        rotate: 360,
        duration: 1.5,
        ease: "circ.in",
      }
    );
    gsap.to([socialLinks], {
      xPercent: -150,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.24,
    });

    let mm = gsap.matchMedia();

    mm.add("(max-width: 500px)", (context) => {
      tl.set([businessIds], {
        xPercent: -155,
        duration: 1.45,
        ease: "elastic.Out",
        delay: -0.45,
        stagger: 0,
      }).to([businessIds], {
        xPercent: 0,
        duration: 1.45,
        ease: "elastic.in",
        delay: -0.45,
        stagger: 0,
      });
    });

    tl.play();
  }
};

export const animateMenuClose = () => {
  const overlay = document.getElementById("overlay");
  const links = document.getElementsByClassName("menu-link");
  const socialLinks = document.getElementsByClassName("social-link");
  const menuImage = document.getElementById("menu-img");

  if (overlay) {
    const tl = gsap.timeline({ paused: true });

    tl.set([socialLinks], {
      xPercent: 500,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.24,
    })
      .to([links], {
        y: 75,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      })
      .to([overlay], hideFromBottomToTop);

    gsap.fromTo(
      menuImage,
      {
        x: 0,
        scale: 0.7,
        rotate: 360,
        duration: 1.5,
      },
      {
        x: 1950,
        duration: 1.5,
        scale: 1,
        rotate: 0,
        ease: "circ.in",
      }
    );

    tl.play();
  }
};

export const initialNextSlide = () => {
  const nextImg = document.getElementsByClassName("slide-next-img");
  if (nextImg) {
    gsap.to(nextImg, growAnimation);
  }
};

export const clickedSlideAnimation = (
  index: React.Dispatch<React.SetStateAction<number>>,
  index2: React.Dispatch<React.SetStateAction<number>>,
  update: (startIndex: number) => void,
  startIndex: number,
  totalSlides: number
) => {
  const activeSlide = ".active-image";
  const activeText = ".text span";

  if (activeSlide) {
    const tl = gsap.timeline({ paused: true });

    tl.set(activeSlide, {
      duration: 5,
      scale: 4,
      ease: "power3.out",
      onComplete: () => {
        index(startIndex % totalSlides);
        index2((startIndex + 1) % totalSlides);
        update((startIndex + 1) % totalSlides);
      },
    }).to(activeSlide, {
      duration: 1,
      scale: 1,
      ease: "power3.in",
    });

    tl.play();
  }
};

export const introAnimation = () => {
  const intro = "#intro";
  const text = "#caption";

  gsap.registerPlugin(ScrollTrigger);
  
  gsap.fromTo(
    text,
    {
      x: -1900,
      duration: 3,
      ease: "back.out",
      scrollTrigger: {
        trigger: text,
        start: "20% bottom",
        end: "bottom bottom",
        scrub: true,
      },
    },
    {
      x: 0,
      duration: 3,
      ease: "back.in",
    }
  );

  gsap.fromTo(
    intro,
    {
      x: 1000,
      duration: 3,
      ease: "back.out",
    },
    {
      x: 0,
      duration: 3,
      ease: "back.in",
      scrollTrigger: {
        trigger: intro,
        start: "20% bottom",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );

};

export const introAnimationReverse = () => {
  const intro = "#intro";
  const text = "#caption";

  // gsap.registerPlugin(ScrollTrigger);
  // gsap.fromTo(
  //   text,
  //   {
  //     x: 0,
  //     duration: 3,
  //     ease: "back.out",
  //     scrollTrigger: {
  //       trigger: text,
  //       start: "bottom bottom",
  //       end: "top bottom",
  //       scrub: true,
  //     },
  //   },
  //   {
  //     x: -1000,
  //     duration: 3,
  //     ease: "circ.out",
  //   }
  // );

  // gsap.fromTo(
  //   intro,
  //   {
  //     x: 0,
  //     duration: 3,
  //     ease: "back.out",
  //     scrollTrigger: {
  //       trigger: intro,
  //       start: "bottom bottom",
  //       end: "top bottom",
  //       scrub: true,
  //     },
  //   },
  //   {
  //     x: 1000,
  //     duration: 3,
  //     ease: "back.in",
  //   }
  // );

};
