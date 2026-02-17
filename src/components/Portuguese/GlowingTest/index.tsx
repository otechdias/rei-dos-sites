import React from "react";
import styles from "./styles.module.scss";

const GlowingButton: React.FC = () => {
  React.useEffect(() => {
    const checkCSSPropertySupport = () => {
      if (typeof window.CSS.registerProperty === "function") {
        console.log("CSS.registerProperty supported 🎉");
        document.body.style.setProperty("--supported", "1");
        document.body.classList.add("registerProperty-supported");
      } else {
        console.log("CSS.registerProperty not supported ❌");
        document.body.style.setProperty("--not-supported", "1");
        document.body.classList.add("registerProperty-not-supported");
      }
    };

    checkCSSPropertySupport();
  }, []);

  return (
    <div className={styles.glowingButtonWrapper}>
      {" "}
      {/* Updated Wrapper Class */}
      <div className={styles.container}>
        <div role="button" className={styles.button}>
          <span className={styles.glow}></span>
          <div>
            <span>cool</span> Glowing shadows
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingButton;
