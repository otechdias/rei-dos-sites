import React, { useEffect } from "react";
import styles from "./styles.module.scss"; // Import the CSS module
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ZoomEffect = () => {
  useEffect(() => {
    let scrollTriggerInstance: typeof ScrollTrigger | null = null;

    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      scrollTriggerInstance = ScrollTriggerModule.ScrollTrigger;

      gsapModule.default.registerPlugin(scrollTriggerInstance);
      const isMobile = window.innerWidth <= 768;
      const isMobilePequeno = window.innerWidth <= 413;

      let scale, xPercent, yPercent;

      if (isMobilePequeno) {
        scale = 170;
        xPercent = 50;
        yPercent = -4000;
      } else if (isMobile) {
        scale = 170;
        xPercent = -500;
        yPercent = -4500;
      } else {
        scale = 700;
        xPercent = -4300;
        yPercent = -50;
      }
      scrollTriggerInstance.getAll().forEach((trigger) => trigger.kill());

      gsapModule.default.to("#zoom-text", {
        scale3d: 100,
        scale,
        duration: 3,
        xPercent,
        yPercent,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: "#zoom-in",
          pin: true,
          end: `+=${innerHeight / 2}`,
          scrub: 0.5,
        },
      });

      gsapModule.default.fromTo(
        "#next-text",
        { y: "1300%", opacity: 0 }, // Start far below the viewport
        {
          y: "0%", // Move to the current position
          opacity: 1, // Make it fully visible
          scrollTrigger: {
            trigger: "#zoom-in",
            start: "top 20%", // Start the animation towards the end of the zoom
            end: "top -20%", // Delay the end point to extend the effect duration
            scrub: true,
          },
          ease: "power3.out",
        },
      );

      // Then, increase the opacity of individual words as they appear
      gsapModule.default.fromTo(
        "#next-text span",
        { opacity: 0.3, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Reveal the words one by one
          scrollTrigger: {
            trigger: "#zoom-in",
            start: "top 0%",
            end: "bottom -10%",
            scrub: true,
          },
          ease: "power3.out",
        },
      );
    };

    loadGSAP();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => {
      if (word.includes("<br/>")) {
        return (
          <React.Fragment key={i}>
            <br />
            <span style={{ opacity: 0.3 }}>
              {word.replace("<br/>", "")}&nbsp;
            </span>
          </React.Fragment>
        );
      } else {
        return (
          <span key={i} style={{ opacity: 0.3 }}>
            {word}&nbsp;
          </span>
        );
      }
    });
  };

  return (
    <div>
      <section id="zoom-in" className={styles.zoomSection}>
        <h2 id="zoom-text" className={styles.zoomText}>
          O que <span>você</span> irá aprender?
        </h2>
        <div className={styles.textWrap}>
          <p id="next-text" className={styles.nextText}>
            {splitText(
              "Impulsione sua carreira <br/>com nosso curso completo! <br/>Aprenda Figma, Wordpress.",
            )}
          </p>
          <p id="next-text" className={styles.nextText}>
            {splitText(
              "HTML, CSS, JavaScript, <br/>e técnicas de venda. <br/>Cada módulo garante um aprendizado.",
            )}
          </p>
          <p id="next-text" className={styles.nextText}>
            {splitText(
              "Prático e eficiente. <br/>Domine habilidades valiosas <br/>e alcance o sucesso no mundo digital.",
            )}
          </p>
        </div>
        <div className={styles.textWrap}>
          <p id="next-text" className={styles.nextTextMobile}>
            {splitText(
              "Impulsione sua carreira <br/>com nosso curso completo! <br/>Aprenda Figma, Wordpress.",
            )}
          </p>
          <p id="next-text" className={styles.nextTextMobile}>
            {splitText(
              "HTML, CSS, JavaScript, <br/>e técnicas de venda. <br/>Cada módulo garante <br/>um aprendizado.",
            )}
          </p>
          <p id="next-text" className={styles.nextTextMobile}>
            {splitText(
              "Prático e eficiente. <br/>Domine habilidades valiosas <br/>e alcance o sucesso digital.",
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ZoomEffect;
