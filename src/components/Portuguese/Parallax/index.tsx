import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const Parallax = () => {
  const container = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTesteComponent, setShowTesteComponent] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 200]);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const progress = parseFloat(v.toFixed(2));
      // Atualiza isAnimating baseado no progresso
      if (progress > 0 && progress < 1) {
        setIsAnimating(true);
      }

      if (progress >= 0.6 && !isEnd) {
        setShowTesteComponent(true);
      }
      if (progress >= 0.8) {
        setIsEnd(true);
        setShowTesteComponent(false); // Opcional, depende da lógica desejada
      } else {
        setIsEnd(false);
      }
      if (progress === 0 || progress === 1) {
        setIsAnimating(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isEnd]);

  const containerBackgroundAnimation = {
    backgroundColor: isEnd ? "#fff" : "#010425",
    transition: {
      duration: 0.1,
      ease: "easeInOut", // Using an easing function for smoother transition
    },
  };

  return (
    <>
      <motion.div
        ref={container}
        className={`${styles.container} ${isEnd ? styles.endContainer : ""}`}
        animate={containerBackgroundAnimation}
      >
        <div className={styles.sticky}>
          <motion.div
            style={{ scale, rotate }}
            className={`${styles.el} ${isAnimating ? styles.startClass : ""} ${
              isEnd ? styles.endClass : ""
            }`}
          >
            <div className={styles.imageContainer}>
              <p>
                O QUE <span>VOCÊ</span> IRÁ APRENDER?
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Parallax;
