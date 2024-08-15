const gsapEffect = [
  {
    id: "pageTransitionIn",
    animate: "fromTo",
    props: {
      yPercent: 0,
      stagger: 0.3,
    },
    props2: {
      yPercent: 100,
      stagger: 0.3,
    },
  },
  {
    id: "pageTransitionOut",
    animate: "fromTo",
    props: {
      yPercent: 100,
      stagger: 0.3,
    },
    props2: {
      yPercent: 0,
      stagger: 0.3,
    },
  },
  {
    id: "growAnimation",
    animate: "fromTo",
    props: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
      duration: 1.5,
      ease: "power3.out",
      delay: 1,
    },
  },
];

export const setAnimation = () => {
  gsapEffect.forEach((effect) => {
    gsap.registerEffect({
      name: effect.id,
      defaults: {
        duration: 1,
      },
      extendTimeline: true,
      effect(targets: any, config?: any, configTo?: any) {
        if (effect.animate === "fromTo") {
          return gsap.fromTo(
            targets,
            { ...effect.props, ...config },
            { ...effect.props2, ...configTo }
          );
        } else if (effect.animate === "from") {
          return gsap.from(targets, { ...effect.props, ...config });
        } else {
          return gsap.to(targets, { ...effect.props, ...config });
        }
      },
    });
  });
};

export const growAnimation = {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
  duration: 1.5,
  ease: "power3.out",
  delay: 1,
};

export const scaleUp = {
  duration: 5,
  scale: 4,
  ease: "power3.out",
};

export const scaleDown = {
  duration: 2,
  scale: 1.3,
  ease: "power3.in",
};

export const hideFromBottomToTop = {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  duration: 1.55,
  ease: "power4.inOut",
};

export const revealFromTopToBottom = {
  duration: 1.25,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power4.inOut",
};

export const breakApartText = {
  duration: 0.5,
  top: "-175px",
  ease: "power3.out",
  stagger: 0.2,
};

export const dropFromTop = {
  duration: 0.25,
  ease: "power3.out",
  top: "-175",
};
