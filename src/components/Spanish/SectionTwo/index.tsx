import Router from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './style.module.scss';

interface SectionTwoProps {
    title: string;
}
const SectionTwo = ({ title }: SectionTwoProps) => {
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (typeof window !== 'undefined') {
            import('react-facebook-pixel')
                .then((module) => {
                    const ReactPixel = module.default;
                    ReactPixel.track('InitiateCheckout', {
                        content_name: 'Curso',
                        value: 17.0,
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
                    value: 17.0,
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
                    <div className={styles.top}>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOut="fadeOut"
                        >
                            <h2>
                                La gran diferencia entre lo que usted esta{' '}
                                <span>prestes a </span>
                                <span>conquistar con el Rey</span> y de que
                                estas huyendo ...
                            </h2>
                        </ScrollAnimation>
                    </div>
                    <div className={styles.bottom}>
                        <ScrollAnimation
                            animateIn="bounceInLeft"
                            animateOut="bounceOutRight"
                        >
                            <div className={styles.leftbox}>
                                <div className={styles.title}>
                                    <h5>Curso que no te va ayudar</h5>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>facturación Dudosa</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Profesor que no vive lo que enseña</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Falta de organizacion</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Curso basico</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>No enseña sobre el mercado real</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Sin suporte</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="bounceInRight"
                            animateOut="bounceOutLeft"
                        >
                            <div className={styles.rightbox}>
                                <div className={styles.title}>
                                    <h5>
                                        Curso del <span>REY</span>
                                    </h5>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Facturacion alta</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Professor vive lo que enseña</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Curso de ponta a ponta</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Bonus sobre el mercado de trabajo</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Dicas exclusivas</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Suporte exclusivo del rey de la web</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation
                        animateIn="bounceInUp"
                        animateOut="fadeOut"
                    >
                        <div className={styles.button}>
                            <button onClick={handleClick} id="iniciar-checkout">
                                <p>QUIERO APRENDER CON EL REY </p>
                            </button>
                        </div>
                    </ScrollAnimation>
                </div>
            </main>
        </>
    );
};

export default SectionTwo;
