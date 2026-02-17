import Link from 'next/link';

import Accordion from '../Accordion';
import styles from './styles.module.scss';

const Questions = () => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftside}>
                    <div className={styles.title}>
                        <h2>
                            Ficou com alguma <span>dúvida</span>?
                        </h2>
                    </div>
                    <div className={styles.subtitle}>
                        <h4>
                            Confira as respostas frequentes ou entre em contato
                            conosco pelos canais abaixo:
                        </h4>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}>
                            <Link href="https://wa.link/q2hdv5">
                                <img src="/whats.svg" />
                            </Link>
                        </div>
                        <div className={styles.text}>
                            <h3>
                                Atendimento por <span>whatsapp</span>
                            </h3>
                            <p>Toque aqui para tirar suas dúvidas</p>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.icon}>
                            <img src="/mail.svg" />
                        </div>
                        <div className={styles.text}>
                            <h3>
                                Atendimento por <span>e-mail</span>
                            </h3>
                            <p>Toque aqui para tirar suas dúvidas</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightside}>
                    <Accordion
                        title="Como faço para me cadastrar?"
                        content="Para se cadastrar, basta clicar no botão 'Me Inscrever' em baixo na direita."
                    />
                    <Accordion
                        title="Quanto é o preço do curso?"
                        content="O curso é um investimento de apenas $197,00 por ano!"
                    />
                    <Accordion
                        title="O que eu vou aprender?"
                        content="Nesse curso tem vários modulos diferentes, como: HTML, CSS, JavaScript, Next.js, entre outros!"
                    />
                    <Accordion
                        title="Eu posso cancelar a qualquer momento?"
                        content="Sim, você pode cancelar a qualquer momento, sem taxas adicionais."
                    />
                    <Accordion
                        title="Quais são as formas de pagamento?"
                        content="Você pode pagar com cartão de crédito, débito ou até mesmo PIX!."
                    />
                    <Accordion
                        title="Serve para iniciantes?"
                        content="Com certeza! O curso ensinará tudo o que você precisa para se tornar um programador de verdade!"
                    />
                    <Accordion
                        title="Não gostou e quer cancelar?"
                        content="Sem problemas! Você tem até 7 dias para cancelar e receber seu dinheiro de volta!"
                    />
                </div>
            </div>
        </main>
    );
};

export default Questions;
