import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let fromVars = { opacity: 0 };
    let toVars = {
      opacity: 1,
      duration: options.duration || 0.8,
      ease: options.ease || "power3.out",
      delay: options.delay || 0,
    };

    const type = options.type || "fade";
    const direction = options.direction || "up";
    const distance = options.distance || 50;

    if (type === "fade") {
      if (direction === "up") fromVars.y = distance;
      if (direction === "down") fromVars.y = -distance;
      if (direction === "left") fromVars.x = distance;
      if (direction === "right") fromVars.x = -distance;
      toVars.x = 0;
      toVars.y = 0;
    } else if (type === "zoom") {
      fromVars.scale = options.scale !== undefined ? options.scale : 0.5;
      toVars.scale = 1;
    }

    const targetElements = options.stagger ? el.children : el;

    const anim = gsap.fromTo(targetElements, fromVars, {
      ...toVars,
      stagger: options.stagger || 0,
      scrollTrigger: {
        trigger: el,
        start: options.start || "top 75%",
        toggleActions: options.toggleActions || "play none none reverse",
        onEnter: () => {
          if (options.onEnter) options.onEnter();
        },
        markers: options.markers || false,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [options]);

  return elementRef;
}
