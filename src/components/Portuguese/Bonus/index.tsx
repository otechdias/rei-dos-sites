import styles from "./styles.module.scss";

const Bonus = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Bônus exclusivos</h2>
          </div>
          <div className={styles.crypto}>
            <div className={styles.leftside}>
              <img src="/bitcoin.svg" />
            </div>

            <div className={styles.rightside}>
              <h4>Robô de cryptomoedas</h4>
              <div className={styles.text}>
                <h5>Falaremos um pouco sobre um</h5>
                <h5>robô exclusivo que faz arbitragem de cryptomoedas</h5>
                <h5>vocês não sabem o que está por vir!</h5>
              </div>
              <hr className={styles.hr} />
            </div>
          </div>
          <div className={styles.mentor}>
            <div className={styles.rightsideMentor}>
              <h4>Mentoria com o REI</h4>
              <div className={styles.text2}>
                <h5>Os melhores alunos terão uma mentoria</h5>
                <h5>exclusiva com o rei dos sites!</h5>
              </div>
              <hr className={styles.hr} />
            </div>
            <div className={styles.leftsideMentor}>
              <img src="/cardShadow.svg" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bonus;
