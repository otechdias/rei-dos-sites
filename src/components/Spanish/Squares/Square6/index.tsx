import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./styles.module.scss";

interface Squares6Props {
  color: string;
  borderColor: string;
  containerColor: string;
}

const Squares6 = ({ color, borderColor, containerColor }: Squares6Props) => {
  const animationVariants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 50 },
  };

  return (
    <>
      <InView threshold={0.5} triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className={styles.container}
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            style={{ borderColor, color, backgroundColor: containerColor }}
          >
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.texts}>
                  <div className={styles.top}>
                    <h4 style={{ color }}>Módulo 6</h4>
                  </div>
                  <div className={styles.title}>
                    <h3 style={{ color }}>Github</h3>
                  </div>
                  <div className={styles.body}>
                    <h5 style={{ color }}>
                      Domine GitHub! aprenda a administrar proyectos, versionar
                      su codigo y colaborar en equipo con facilidad con esas
                      habilidades, usted estara pronto para enfrentar cualquier
                      desafio en desenvolvimiento!
                    </h5>
                  </div>
                </div>
                <hr
                  className={styles.hr}
                  style={{ backgroundColor: borderColor }}
                />
                <div className={styles.bottom}>
                  <h4 style={{ color }}>
                    Preço: <span>R219,00</span>
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </>
  );
};

export default Squares6;
