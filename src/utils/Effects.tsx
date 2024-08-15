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
  {
    id: "scaleUp",
    props: {
      duration: 1.5,
      scale: 3,
      ease: "power3.out",
    },
  },
  {
    id: "scaleDown",
    props: {
      duration: 1.5,
      scale: 0,
      ease: "power3.in",
    },
  },
  {
    id: "menuOpen",
    props: {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    },
  },
  {
    id: "menuClose",
    props: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.55,
      ease: "power4.inOut",
    },
  },
  {
    id: "textBreakApart",
    props: {
      duration: 0.5,
      top: "-175px",
      ease: "power3.out",
      stagger: 0.2,
    },
  },
  {
    id: "hide",
    props: {
      opacity: 0,
      display: "none",
      duration: 1.2
    }
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