import router from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './styles.module.scss';
interface SectionOneProps {
    title: string;
}
const SectionOne = ({ title }: SectionOneProps) => {
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

            router.push(redirectUrl);
        }
    };
    return (
        <>
            <main className={styles.container}>
                <div className={styles.content}>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className={styles.leftside}>
                            <img className={styles.logo} src="/logo2.svg" />
                            <h1>
                                Todo lo que usted necesita para mudar de vida y{' '}
                                <span className={styles.auroraSpan}>
                                    ganar mas de 5 mil reales por semana
                                </span>{' '}
                                creando paginas de su casa
                            </h1>
                            <h5>
                                Aprenda con quien vive lo que dice, a hacer de
                                su casa con quien va a mudar su vida! usted ya
                                puede empezar hoy haciendo paginas de su casa y
                                ganar mas de 10 mil reales por mes apartir de
                                los proximos 30 dias.
                            </h5>

                            <button onClick={handleClick} id="iniciar-checkout">
                                <p>QUIERO MUDAR DE VIDA</p>
                            </button>

                            <div className={styles.discount}>
                                <img src="/discountTag.svg" />
                                <p>Solo R$ 197,00.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className={styles.rightside}>
                            <div className={styles.backgroundImages}>
                                <img src="/pix1.svg" alt="Background 1" />
                                <img src="/pix2.svg" alt="Background 2" />
                                <img src="/pix3.svg" alt="Background 3" />
                                <img src="/pix4.svg" alt="Background 4" />
                            </div>
                            <img
                                src="/herbertOnly.svg"
                                alt="Herbert"
                                className={styles.herbert}
                            />
                        </div>
                    </ScrollAnimation>
                </div>
            </main>
        </>
    );
};

export default SectionOne;
