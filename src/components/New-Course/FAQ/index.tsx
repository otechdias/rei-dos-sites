import { useState } from "react";
import styles from "./styles.module.scss";

const faqs = [
  {
    question: "Como faço para me inscrever no curso?",
    answer:
      "Basta clicar no botão de inscrição na página inicial, preencher o formulário com seus dados e efetuar o pagamento. Após isso, você terá acesso imediato ao curso.",
  },
  {
    question: "Preciso ter experiência para começar?",
    answer:
      "Não! O curso é ideal tanto para iniciantes quanto para quem já tem algum conhecimento e quer se aperfeiçoar.",
  },
  {
    question: "Quanto tempo tenho para concluir o curso?",
    answer:
      "O acesso ao curso é vitalício, então você pode aprender no seu próprio ritmo, sem pressa.",
  },
  {
    question: "Receberei um certificado ao finalizar o curso?",
    answer:
      "Sim, todos os alunos que concluírem o curso recebem um certificado de conclusão.",
  },
  {
    question: "O que está incluído no curso?",
    answer:
      "Você terá acesso a aulas em vídeo, materiais de apoio, projetos práticos e suporte exclusivo para tirar suas dúvidas.",
  },
  {
    question: "Posso acessar o curso pelo celular?",
    answer:
      "Sim! O curso pode ser acessado de qualquer dispositivo com internet.",
  },
  {
    question: "E se eu tiver dúvidas durante o curso?",
    answer:
      "Você terá acesso ao nosso suporte dedicado para ajudá-lo com qualquer dúvida ou dificuldade.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>FAQ</p>
        <h2>
          Dúvidas e <br />
          perguntas frequentes
        </h2>
      </div>
      <div className={styles.middle}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faq} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.question}>
              <div className={styles.leftQ}>
                <h4>{index + 1}. </h4>
                <h4>{faq.question}</h4>
              </div>
              <div
                className={`${styles.icon} ${
                  activeIndex === index ? styles.rotate : ""
                }`}
              >
                <img src="/rightArrow.svg" alt="Abrir resposta" />
              </div>
            </div>
            <div
              className={styles.answer}
              style={{
                maxHeight: activeIndex === index ? "100px" : "0",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <h5>{faq.answer}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
