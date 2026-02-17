import styles from './styles.module.scss';

const About = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.titleBlock}>
                        <p>Oferta especial</p>
                        <h2>
                            Por que ter um <span>SITE?</span>
                        </h2>
                        <h6>
                            Ter um site bem feito vai além de estar online. Ele
                            é essencial para o sucesso de sua estratégia
                            digital. Aqui estão os principais benefícios:
                        </h6>
                    </div>
                    <div className={styles.flexDesktop}>
                        <div className={styles.checkBoxContainer}>
                            <div className={styles.checkBoxBlock}>
                                <h5>✅ Visibilidade 24/7</h5>
                                <p>
                                    Seu negócio disponível o tempo todo,
                                    acessível de qualquer lugar.
                                </p>
                            </div>
                            <div className={styles.checkBoxBlock}>
                                <h5>✅ Credibilidade e Confiança</h5>
                                <p>
                                    Sites profissionais geram mais confiança e
                                    destacam sua marca.
                                </p>
                            </div>
                            <div className={styles.checkBoxBlock}>
                                <h5>✅ Alcance Global</h5>
                                <p>
                                    Expanda sua audiência além das fronteiras
                                    físicas.
                                </p>
                            </div>
                            <div className={styles.checkBoxBlock}>
                                <h5>✅ Facilidade de Comunicação</h5>
                                <p>
                                    Ofereça canais de contato direto com seus
                                    clientes.
                                </p>
                            </div>
                            <div className={styles.checkBoxBlock}>
                                <h5>✅ Oportunidade de Vendas:</h5>
                                <p>
                                    Converta visitantes em clientes com um site
                                    otimizado e de alta performance.
                                </p>
                            </div>
                        </div>
                        <img src="/mockupWebsite.svg" />
                    </div>
                </div>
                <img src="/aboutLine.svg" className={styles.imgLine} />
            </section>
        </>
    );
};

export default About;
