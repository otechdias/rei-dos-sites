import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <h4>© Rei dos Códigos 2024</h4>
        </div>
        <div className={styles.rightside}>
          <p>Termos de uso</p>
          <hr />
          <p>Política de privacidade</p>
        </div>
      </div>
    </div>
  );
}
