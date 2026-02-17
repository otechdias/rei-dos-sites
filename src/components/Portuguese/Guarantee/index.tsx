import ScrollAnimation from "react-animate-on-scroll";
import styles from "./style.module.scss";
import Image from "next/image";

const Guarantee = () => {
  return (
    <main className={styles.container}>
      {/* @ts-ignore */}
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
              <p>Garantindo a sua vaga agora, você não corre risco nenhum!</p>
              <p>
                Você pode ver todo o Protocolo por dentro e, caso perceba que
                não faz sentido para o seu momento, basta me enviar um e-mail e
                eu vou devolver 100% do seu investimento.
              </p>
              <p>O risco é todo meu.</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img src="/safePayment.svg" />
              </div>
              <div className={styles.text}>
                <h5>Pagamento seguro</h5>
                <p>Diversas formas de pagar, todas com selo de segurança.</p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img src="/lock.svg" />
              </div>
              <div className={styles.text}>
                <h5>Liberação imediata</h5>
                <p>Receba seu login e senha na mesma hora que comprar.</p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.icon}>
                <img src="/infinite.svg" />
              </div>
              <div className={styles.text}>
                <h5>Acesso permanente</h5>
                <p>Enquanto estiver o plano, você terá acesso para sempre.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default Guarantee;
