// components/GlowingButton.tsx

import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const GlowingButton: React.FC = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.CSS.registerProperty === "function"
    ) {
      console.log("CSS.registerProperty supported 🎉");
      document.body.style.setProperty("--supported", "1");
      document.body.classList.add("registerProperty-supported");
    } else {
      console.log("CSS.registerProperty not supported ❌");
      document.body.style.setProperty("--not-supported", "1");
      document.body.classList.add("registerProperty-not-supported");
    }
  }, []);

  return (
    <div role="button" className={styles.glowButton}>
      <span className={styles.glow}></span>
      <div>
        <span>cool</span>Glowing shadows
      </div>
    </div>
  );
};

export default GlowingButton;
