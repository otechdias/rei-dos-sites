import { motion } from 'framer-motion';
import Router from 'next/router';
import { InView } from 'react-intersection-observer';
import styles from './styles.module.scss';
interface PriceProps {
    title: string;
}
const Price = ({ title }: PriceProps) => {
    const animationVariants = {
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 50 },
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (typeof window !== 'undefined') {
            import('react-facebook-pixel')
                .then((module) => {
                    const ReactPixel = module.default;
                    ReactPixel.track('InitiateCheckout', {
                        content_name: 'Curso',
                        value: 49.0,
                        currency: 'BRL',
                    });
                })
                .catch((err) =>
                    console.error('Failed to load React Facebook Pixel', err)
                );

            if (window.gtag) {
                window.gtag('event', 'InitiateCheckout', {
                    event_category: 'engagement',
                    event_label: 'Curso Checkout',
                    value: 49.0,
                    currency: 'BRL',
                });
            }

            let redirectUrl = 'https://pay.kiwify.com.br/K0j9Sec';

            Router.push(redirectUrl);
        }
    };

    return (
        <>
            <main className={styles.container}>
                <div className={styles.content}>
                    <InView threshold={0.5} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                className={styles.leftside}
                                variants={animationVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                transition={{ duration: 0.5 }}
                            >
                                <h2>
                                    Cuanto necesitaras <span>invertir?</span>
                                </h2>
                                <h5>
                                    Vuelvase un programador y cambie su vida
                                    creando pagina y landing pages!
                                </h5>
                            </motion.div>
                        )}
                    </InView>
                    <InView threshold={0.5} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                className={styles.leftsideResponsive}
                                variants={animationVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.modulesResponsive}>
                                    <img src="/smallCheck.svg" />
                                    <p>Módulo 01: Design con figma </p>
                                </div>
                                <div className={styles.modulesResponsive}>
                                    <img src="/smallCheck.svg" />
                                    <p>Modulo 02: WordPress </p>
                                </div>
                                <div className={styles.modulesResponsive}>
                                    <img src="/smallCheck.svg" />
                                    <p>Módulo 03: Estrategias de venta </p>
                                </div>
                                <div className={styles.modulesResponsive}>
                                    <img src="/smallCheck.svg" />
                                    <p>
                                        Módulo 04: Programacion desde zero al
                                        pro{' '}
                                    </p>
                                </div>
                                <div className={styles.modulesResponsive}>
                                    <img src="/smallCheck.svg" />
                                    <p>Módulo 05: Anuncios online </p>
                                </div>
                                <div className={styles.modulesResponsive}>
                                    <img src="/smallCheck.svg" />
                                    <p>Suporte del REY </p>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                    <InView threshold={0.5} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                className={styles.middle}
                                variants={animationVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.logo}>
                                    <img src="/logo2.svg" />
                                </div>
                                <div className={styles.money}>
                                    <img src="/money.svg" />
                                    <p>TODO ESO POR APENAS</p>
                                </div>
                                <div className={styles.bigMoney}>
                                    <h2>R$ 197,00</h2>
                                    <h3>/Ano</h3>
                                </div>
                                <div className={styles.middleMoney}>
                                    <h3>Firma</h3>
                                </div>
                                <div className={styles.button}>
                                    <button
                                        onClick={handleClick}
                                        id="iniciar-checkout"
                                    >
                                        <p>Quiero mudar de vida con paginas</p>
                                        <img src="buttonArrow.svg" />
                                    </button>
                                </div>
                                <hr className={styles.hr} />
                                <div className={styles.payments}>
                                    <img src="/newPayment.svg" />
                                </div>
                            </motion.div>
                        )}
                    </InView>
                    <InView threshold={0.5} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                className={styles.rightside}
                                variants={animationVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                transition={{ duration: 0.5 }}
                            >
                                {' '}
                                <h3>
                                    recuerda todo lo que usted va a tener acceso
                                    ahora:
                                </h3>
                                <div className={styles.modules}>
                                    <img src="/smallCheck.svg" />
                                    <p>Módulo 01: Design con figma </p>
                                </div>
                                <div className={styles.modules}>
                                    <img src="/smallCheck.svg" />
                                    <p>Módulo 02: WordPress </p>
                                </div>
                                <div className={styles.modules}>
                                    <img src="/smallCheck.svg" />
                                    <p>Módulo 03: Estrategias de venta </p>
                                </div>
                                <div className={styles.modules}>
                                    <img src="/smallCheck.svg" />
                                    <p>
                                        Módulo 04: Programacion de zero al pro{' '}
                                    </p>
                                </div>
                                <div className={styles.modules}>
                                    <img src="/smallCheck.svg" />
                                    <p>Módulo 05: Anuncios online </p>
                                </div>
                                <div className={styles.modules}>
                                    <img src="/smallCheck.svg" />
                                    <p>Suporte del REY </p>
                                </div>
                            </motion.div>
                        )}
                    </InView>{' '}
                </div>
            </main>
        </>
    );
};

export default Price;
