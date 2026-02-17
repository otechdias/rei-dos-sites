import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./styles.module.scss";

interface Squares2Props {
  color: string;
  borderColor: string;
  containerColor: string;
}

const Squares2 = ({ color, borderColor, containerColor }: Squares2Props) => {
  const animationVariants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: -50 },
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
            style={{ borderColor, color, backgroundColor: containerColor }} // Apply container color
          >
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.texts}>
                  <div className={styles.top}>
                    <h4 style={{ color }}>Módulo 2</h4>
                  </div>
                  <div className={styles.title}>
                    <h3 style={{ color }}>Wordpress</h3>
                  </div>
                  <div className={styles.body}>
                    <h5 style={{ color }}>
                      El WordPress es una herramienta increible para creacion de
                      paginas, permitindo libertad creativa con facilidade de
                      uso. oferta una infinidad de plugins para ampliar
                      funciones, mas alla de ser octimizado para SEO.
                    </h5>
                  </div>
                </div>
                <hr
                  className={styles.hr}
                  style={{ backgroundColor: borderColor }}
                />
                <div className={styles.bottom}>
                  <h4 style={{ color }}>
                    Preço: <span>R$719,00</span>
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

export default Squares2;
