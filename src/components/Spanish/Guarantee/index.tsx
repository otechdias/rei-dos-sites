import ScrollAnimation from "react-animate-on-scroll";
import styles from "./style.module.scss";
import Image from "next/image";

const Guarantee = () => {
  return (
    <main className={styles.container}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.leftside}>
              <div className={styles.leftsideContent}>
                <h5>Dias de</h5>
                <h5>garantia</h5>
                <div className={styles.stars}>
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                </div>
              </div>
            </div>
            <div className={styles.rightside}>
              <h5>
                Experimente por{" "}
                <span className={styles.auroraSpan}>7 dias</span>
              </h5>
              <p>
                Garantize su lugar ahora mismo, usted no va a correr ningun
                riesgo!
              </p>
              <p>
                Usted va a poder ver todo el Protocolo por dentro y, caso
                perciba que no hace sentido en este momento, puedes enviarme un
                e-mail y voy devolverte toda su oferta.
              </p>
              <p>El riesgo es todo mio.</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img src="/safePayment.svg" />
              </div>
              <div className={styles.text}>
                <h5>Pagamento seguro</h5>
                <p>
                  Diversas formas de pagar, todas com el sello de seguridad.
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img src="/lock.svg" />
              </div>
              <div className={styles.text}>
                <h5>Liberacion imediata</h5>
                <p>
                  Reciba su login y contraseña en la misma hora que comprar.
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img src="/infinite.svg" />
              </div>
              <div className={styles.text}>
                <h5>Acceso permanente</h5>
                <p>
                  Encuanto tengas el plano, Ustes va a tener todo el acceso
                  siempre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default Guarantee;
