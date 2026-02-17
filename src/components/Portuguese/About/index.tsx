import styles from "./styles.module.scss";
const About = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.texts}>
            <div className={styles.title}>
              <h2>
                Herbert Carnaúba – <span>o REI</span>
              </h2>
            </div>
            <div className={styles.body}>
              <h5>
                <span>Herbert Carnaúba</span> é um jovem empreendedor que ficou
                conhecido como o “rei dos sites”. Com{" "}
                <span>apenas 22 anos</span>, ele saiu de São Paulo e foi para
                Curitiba em busca de oportunidades para construir sua carreira.
              </h5>
              <h5>
                Foi lá que ele descobriu sua paixão pela criação de sites e
                decidiu investir nesse ramo. Com muita dedicação e esforço,
                Herbert construiu um império de criação de sites que o tornou
                <span>referência no mercado.</span>
              </h5>
              <h5>
                Hoje em dia, ele é admirado por muitos jovens empreendedores que
                buscam seguir seus passos e se tornarem bem-sucedidos no mundo
                dos negócios. Com seu exemplo inspirador, Herbert Carnaúba
                mostra que é possível conquistar seus sonhos e alcançar o
                sucesso <span> com trabalho duro e perseverança.</span>
              </h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
