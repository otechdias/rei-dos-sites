import React from "react";
import styles from "./styles.module.scss";

const Aurora: React.FC = () => {
  return (
    <div className={styles.auroraWrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          the beautiful aurora
          <div className={styles.aurora}>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
          </div>
        </h1>
        <p className={styles.subtitle}>Made with love and only the CSS.</p>
      </div>
    </div>
  );
};

export default Aurora;
