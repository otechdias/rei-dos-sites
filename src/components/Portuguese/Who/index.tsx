import styles from "./style.module.scss";

const Who = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="/happyHerbert.svg" />
          </div>
          <div className={styles.rightside}>
            <h2>Para quem é o curso?</h2>
            <p>
              O curso foi pensado do zero ao avançado, até para você que não
              sabe nada de programação! pensamos em modulos exclusivos para
              você! nossa equipe está preparada para te ajudar!
            </p>
            <p>
              Mesmo que você não tenha nenhum nível de programação, vamos te
              mostrar que é possível (e muito mais fácil do que você imagina)
              ganhar até R$ 10000 com a venda e construção de sites.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Who;
