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
                                A diferença absurda entre o que você está{' '}
                                <span>prestes a </span>
                                <span>adiquirir com o Rei</span> e do que está
                                fugindo ...
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
                                    <h5>Curso meia boca</h5>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Faturamento incerto</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Professor que não vive o que ensina</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Falta de organização</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Curso básico</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Não ensina sobre o mercado real</p>
                                </div>
                                <div className={styles.cons}>
                                    <img src="/redX.svg" />
                                    <p>Sem suporte</p>
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
                                        Curso do <span>REI</span>
                                    </h5>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Faturamento alto</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Professor vive o que ensina</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Curso ponta a ponta</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Bônus sobre mercado de trabalho</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Dicas exclusivas</p>
                                </div>
                                <div className={styles.pros}>
                                    <img src="/correct.svg" />
                                    <p>Suporte exclusivo do rei</p>
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
                                <p>QUERO APRENDER COM O REI</p>
                            </button>
                        </div>
                    </ScrollAnimation>
                </div>
            </main>
        </>
    );
};

export default SectionTwo;
