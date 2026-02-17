import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useQueryParams } from "@/context/QueryContext";
import { getKiwifyUrl } from "@/utils/urlUtils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { params } = useQueryParams();

  const handleRedirect = () => {
    window.location.href = getKiwifyUrl(params) || "";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/new-logo.svg" alt="Logo" />
          <hr />
          <p onClick={() => handleScrollToSection("desafio")}>Video</p>
          <p onClick={() => handleScrollToSection("premiacao")}>Aprender</p>
          <p onClick={() => handleScrollToSection("depoimentos")}>
            Depoimentos
          </p>
          <p onClick={() => handleScrollToSection("duvidas")}>Dúvidas</p>
        </div>
        <div className={styles.rightside}>
          <button onClick={handleRedirect}>
            <img src="/crown.svg" alt="" />
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
}
