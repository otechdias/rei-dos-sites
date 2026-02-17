import styles from "./styles.module.scss";

export default function Steps() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>ETAPAS</p>
        <h2>Do básico ao avançado, </h2>
        <h5>
          Cada etapa foi planejada para te guiar no aprendizado de HTML, Python
          e Inteligência Artificial, <br /> e transformar suas ideias em
          realidade na web e na tecnologia.
        </h5>
      </div>
      <div className={styles.middle}>
        {/* HTML */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/binoculo.svg" alt="" />
            <h3>Introdução ao HTML</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Aprenda a estrutura básica de um site.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Entenda como organizar conteúdo.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Descubra como criar links e imagens.</h5>
          </div>
        </div>

        {/* Python */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/page.svg" alt="" />
            <h3>Programação com Python</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Compreenda conceitos de lógica e algoritmos.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Trabalhe com automação de tarefas.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Desenvolva aplicações simples.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Manipule e analise dados.</h5>
          </div>
        </div>

        {/* Inteligência Artificial */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/list.svg" alt="" />
            <h3>Introdução à Inteligência Artificial</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Entenda os fundamentos do Machine Learning.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Aprenda a treinar modelos simples.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Explore algoritmos de classificação e regressão.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Implemente redes neurais básicas.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
