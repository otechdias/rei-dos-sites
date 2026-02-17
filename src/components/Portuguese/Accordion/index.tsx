import { useState } from "react";
import styles from "./styles.module.scss";

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionToggle} onClick={toggleAccordion}>
        {title} <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.show : ""}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
