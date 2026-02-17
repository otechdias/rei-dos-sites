import { useQueryParams } from "@/context/QueryContext";
import styles from "./styles.module.scss";
import { getKiwifyUrl } from "@/utils/urlUtils";

export default function WhiteCards() {
  const { params } = useQueryParams();

  const handleRedirect = () => {
    window.location.href = getKiwifyUrl(params) || "";
  };

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>O CURSO</p>
        <h2>o que você vai aprender?</h2>
        <h5>
          Aprenda de forma prática e simples a criar sites modernos do zero.
          <br /> Não importa o seu nível de conhecimento, você pode começar
          agora!
        </h5>
      </div>
      <div className={styles.middle}>
        <div className={styles.middleTop}>
          <div className={styles.card1}>
            <h3>
              <img src="/licon1.svg" alt="" />
              HTML
            </h3>
            <p>
              Ao aprender HTML, você adquire o alicerce fundamental para
              construir sites profissionais, compreende a estruturação correta
              de páginas na web, facilita a manutenção de projetos e amplia suas
              possibilidades de personalização e evolução no desenvolvimento
              frontend.
            </p>
          </div>
          <div className={styles.card2}>
            <h3>
              <img src="/licon2.svg" alt="" /> CSS
            </h3>
            <p>
              Aprenda a estilizar seus sites com designs incríveis e
              responsivos. Dominar CSS permite não apenas escolher cores e
              fontes com perfeição, mas também criar layouts criativos,
              implementar animações sofisticadas e ajustar cada detalhe visual
              ao seu gosto.
            </p>
          </div>
        </div>
        <div className={styles.middleBottom}>
          <div className={styles.card}>
            <h3>
              <img src="/licon3.svg" alt="" /> JAVASCRIPT
            </h3>
            <p>
              Adicione interatividade e dinamismo às suas páginas da web. Ao
              aprender JavaScript, você ganha a habilidade de criar animações
              envolventes, manipular o comportamento dos elementos em tempo real
              e responder às ações do usuário de maneira imediata.
            </p>
          </div>

          <div className={styles.card}>
            <h3>
              <img src="/licon4.svg" alt="" /> PYTHON
            </h3>
            <p>
              Aprenda Python, uma das linguagens mais versáteis e poderosas do
              mercado. Domine conceitos de programação, automatize tarefas
              repetitivas, analise dados e explore sua criatividade em
              desenvolvimento de sistemas e aplicações modernas.
            </p>
          </div>
          <div className={styles.card}>
            <h3>
              <img src="/licon5.svg" alt="" /> INTELIGÊNCIA ARTIFICIAL
            </h3>
            <p>
              Descubra o fascinante mundo da Inteligência Artificial. Aprenda a
              construir modelos de Machine Learning, processar dados e criar
              soluções inovadoras que podem transformar indústrias, desde
              automação até análises preditivas.
            </p>
          </div>
        </div>
      </div>
      <button onClick={handleRedirect}>quero aprender agora</button>
    </div>
  );
}
