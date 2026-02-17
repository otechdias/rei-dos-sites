import Link from 'next/link';
// import Accordion from '../../Portuguese/Accordion';
import Accordion from '@/components/Portuguese/Accordion';
import styles from './styles.module.scss';

const Questions = () => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftside}>
                    <div className={styles.title}>
                        <h2>
                            Quedo con alguna duvida <span>dúvida</span>?
                        </h2>
                    </div>
                    <div className={styles.subtitle}>
                        <h4>
                            Confira las respuestas frecuentes o entre en
                            contacto con nosotros:
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
                                Atendimiento por <span>whatsapp</span>
                            </h3>
                            <p>Toque aqui para quitar sus dudas</p>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.icon}>
                            <img src="/mail.svg" />
                        </div>
                        <div className={styles.text}>
                            <h3>
                                Atencion por <span>e-mail</span>
                            </h3>
                            <p>Toque aqui para quitar sus dudas</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightside}>
                    <Accordion
                        title="Como hago para cadastrarme?"
                        content="Para cadastrarte, nesecitas clicar el boton 'Inscrivirme' abajo a la derecha."
                    />
                    <Accordion
                        title="cuanto es el precio del curso?"
                        content="El curso es una inversion de apenas $197,00 por año!"
                    />
                    <Accordion
                        title="Que es lo que vas aprender?"
                        content="En este curso hay vários modulos diferentes, como: HTML, CSS, JavaScript, Next.js, entre otros!"
                    />
                    <Accordion
                        title="Yo puedo cancelar a cualquier momento?"
                        content="Si, usted puede cancelar a qualquier momento, sin tasas adicionales."
                    />
                    <Accordion
                        title="Quales son las formas de pagemento Quales son las formas de pagamento?"
                        content="Usted puede pagar con carton de crédito, débito o hasta mismo PIX!."
                    />
                    <Accordion
                        title="Sirve para iniciantes?"
                        content="claro! El curso enseñara todo lo que usted necesita para tornarse un programador de verdade!"
                    />
                    <Accordion
                        title="No le gusto y quiere cancelar?"
                        content="Sin problemas! Usted tiene hasta 7 dias para cancelar y recebir toda la plata!"
                    />
                </div>
            </div>
        </main>
    );
};

export default Questions;
