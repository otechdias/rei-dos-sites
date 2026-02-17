// components/HybridScroll.tsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const HybridScroll: React.FC = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const stickSections = stickyRef.current ? [stickyRef.current] : [];

    const handleScroll = () => {
      stickSections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const scrollSection = section.querySelector(
          `.${styles.scrollSection}`,
        ) as HTMLElement | null;
        let percentage =
          ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = Math.max(0, Math.min(percentage, 6500));
        if (
          window.scrollY > offsetTop &&
          window.scrollY < offsetTop + section.offsetHeight
        ) {
          if (scrollSection) {
            scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            scrollSection.style.position = "fixed";
          }
        } else {
          if (scrollSection) {
            scrollSection.style.position = "absolute";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.stickyParent}>
      <div className={styles.sticky} ref={stickyRef}>
        <div className={styles.scrollSection}>
          <div className={styles.horizontalScrollContainer}>
            <div className={styles.sectionOne}>
              <h2>O que você aprenderá?</h2>
            </div>

            <div className={styles.sectionTwo}>
              <div className={styles.contentTwo}>
                <h4>MÓDULO 01</h4>
                <h3>Design com Figma</h3>
                <div className={styles.text}>
                  <h5>
                    Descubra como criar designs incríveis utilizando a poderosa
                    ferramenta
                  </h5>
                  <h5>
                    Figma. Aprenda técnicas de design que irão transformar seus
                    projetos
                  </h5>
                  <h5>em verdadeiras obras de arte.</h5>
                </div>
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.sectionThree}>
              <div className={styles.contentThree}>
                <h4>MÓDULO 02</h4>
                <h3>Wordpress</h3>
                <div className={styles.text}>
                  <h5>
                    O WordPress é uma plataforma incrível para criação de
                    websites,
                  </h5>
                  <h5>
                    permitindo liberdade criativa com facilidade de uso. Oferece
                    uma
                  </h5>
                  <h5>
                    infinidade de plugins para ampliar funcionalidades, além de
                    ser
                  </h5>
                  <h5>otimizado para SEO.</h5>
                </div>
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.sectionFour}>
              <div className={styles.contentFour}>
                <h4>MÓDULO 03</h4>
                <h3>Estratégias de venda</h3>
                <div className={styles.text}>
                  <h5>
                    Potencialize suas vendas! Aprenda a conectar-se com
                    clientes, criar
                  </h5>
                  <h5>
                    ofertas atrativas e fechar negócios de forma eficiente.
                    Transforme
                  </h5>
                  <h5>
                    possibilidades em lucros conosco e destaque-se no mundo das
                    vendas!
                  </h5>
                </div>
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.sectionFive}>
              <div className={styles.contentFive}>
                <h4>MÓDULO 04</h4>
                <h3>Programação do zero ao pro</h3>
                <div className={styles.text}>
                  <h5>
                    Aprenda conceitos fundamentais e avançados de programação,
                    com
                  </h5>
                  <h5>
                    técnicas práticas para construir projetos sólidos. Com nosso
                    curso, você
                  </h5>
                  <h5>
                    terá as habilidades necessárias para se destacar no mundo da
                  </h5>
                  <h5>tecnologia!</h5>
                </div>
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.sectionSix}>
              <div className={styles.contentSix}>
                <h4>MÓDULO 05</h4>
                <h3>Anúncios online</h3>
                <div className={styles.text}>
                  <h5>
                    Maximize sua visibilidade online com nosso módulo de
                    Anúncios
                  </h5>
                  <h5>
                    Online! Aprenda a criar e gerenciar campanhas publicitárias
                  </h5>
                  <h5>
                    impactantes, otimizando seu investimento para atingir o
                    público certo.
                  </h5>
                  <h5>
                    Domine o mundo do marketing digital conosco e faça seus
                    negócios
                  </h5>
                  <h5>decolarem! </h5>
                </div>
                <hr className={styles.hr} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridScroll;
