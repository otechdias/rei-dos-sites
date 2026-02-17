import React from "react";
import styles from "./styles.module.scss";

export default function Depoimentos() {
  const testimonials = [
    {
      text: "Comecei o curso sem nenhuma experiência em programação e agora consigo criar páginas completas do zero. HTML e CSS nunca pareceram tão fáceis!",
      name: "Gustavo Paço",
      role: "Designer Gráfico",
      img: "/pacoca.png",
    },
    {
      text: "Achei incrível como o curso explicou JavaScript de forma tão prática. Agora entendo conceitos como manipulação do DOM e consigo criar interações incríveis!",
      name: "Carlos T.",
      role: "João Pedro",
      img: "/baiano.png",
    },
    {
      text: "O curso me ensinou a estruturar um site completo com HTML, estilizar com CSS e adicionar funcionalidades com JavaScript. Recomendo para todos que estão começando!",
      name: "Joel Gouvea",
      role: "Empresário",
      img: "/joel.png",
    },
    {
      text: "Sempre quis aprender programação, mas achava que era muito complicado. O curso desmistificou tudo e agora consigo criar meus próprios projetos com confiança!",
      name: "Davi Hernandes",
      role: "Estudante",
      img: "/davi.png",
    },
    {
      text: "Eu já tinha uma base em HTML e CSS, mas o curso me ajudou a dominar JavaScript de verdade. Hoje consigo criar sites dinâmicos e recebo mais pedidos de freelances.",
      name: "Leonardo Lima Dorea",
      role: "Web Designer",
      img: "/leozinho1.png",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>DEPOIMENTOS</p>
        <h2>
          Histórias reais
          <span>
            de quem <br /> aceitou
          </span>
          o desafio
        </h2>
      </div>
      <div className={styles.middle}>
        {/* Carrossel superior (esquerda para direita) */}
        <div className={styles.middleTop}>
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={`top-${index}`}>
              <div className={styles.card}>
                <p>{testimonial.text}</p>
                <div className={styles.profile}>
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className={styles.text}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          {/* Repetindo os elementos para continuidade */}
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={`top-duplicate-${index}`}>
              <div className={styles.card}>
                <p>{testimonial.text}</p>
                <div className={styles.profile}>
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className={styles.text}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Carrossel inferior (direita para esquerda com ordem invertida) */}
        <div className={styles.middleBottom}>
          {testimonials
            .slice() // Cria uma cópia do array original para evitar mutação
            .reverse()
            .map((testimonial, index) => (
              <React.Fragment key={`bottom-${index}`}>
                <div className={styles.card}>
                  <p>{testimonial.text}</p>
                  <div className={styles.profile}>
                    <img src={testimonial.img} alt={testimonial.name} />
                    <div className={styles.text}>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          {/* Repetindo os elementos para continuidade */}
          {testimonials
            .slice()
            .reverse()
            .map((testimonial, index) => (
              <React.Fragment key={`bottom-duplicate-${index}`}>
                <div className={styles.card}>
                  <p>{testimonial.text}</p>
                  <div className={styles.profile}>
                    <img src={testimonial.img} alt={testimonial.name} />
                    <div className={styles.text}>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
