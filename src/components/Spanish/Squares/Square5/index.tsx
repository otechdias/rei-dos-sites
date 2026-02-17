import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./styles.module.scss";

interface Squares5Props {
  color: string;
  borderColor: string;
  containerColor: string;
}

const Squares5 = ({ color, borderColor, containerColor }: Squares5Props) => {
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
                    <h4 style={{ color }}>Módulo 5</h4>
                  </div>
                  <div className={styles.title}>
                    <h3 style={{ color }}>Html, CSS e Javascript</h3>
                  </div>
                  <div className={styles.body}>
                    <h5 style={{ color }}>
                      Aprenda todo! con el conocimiento de estas lenguages usted
                      puede construir no solo paginas, mas softwares increibles
                      con funciones que van a sorprenderte. depues que usted
                      aprender esas lo demas quedara mas facil!
                    </h5>
                  </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.bottom}>
                  <h4 style={{ color }}>
                    Preço: <span>R$349,00</span>
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

export default Squares5;
