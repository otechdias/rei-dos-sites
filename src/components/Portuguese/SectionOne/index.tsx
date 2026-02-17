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
            if (title === 'tiktok-organico') {
                redirectUrl = 'https://pay.kiwify.com.br/NiELVlQ';
            } else if (title === 'tiktok-ads') {
                redirectUrl = 'https://pay.kiwify.com.br/tScgUeu';
            } else if (title === 'facebook-organico') {
                redirectUrl = 'https://pay.kiwify.com.br/ln7JKbd';
            } else if (title === 'facebook-ads') {
                redirectUrl = 'https://pay.kiwify.com.br/lQg3GqZ';
            } else if (title === 'instagram-ads') {
                redirectUrl = 'https://pay.kiwify.com.br/kvegj2I';
            } else if (title === 'instagram-organico') {
                redirectUrl = 'https://pay.kiwify.com.br/K0j9Sec';
            }

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
                                Tudo o que você precisa saber para mudar de vida
                                e{' '}
                                <span className={styles.auroraSpan}>
                                    ganhar mais de 5 mil reais por semana
                                </span>{' '}
                                criando sites da sua casa.
                            </h1>
                            <h5>
                                Aprenda com quem vive o que fala, a fazer da sua
                                casa o que vai mudar a sua vida! Você já pode
                                começar hoje fazendo sites de casa e ganhar mais
                                de R$10mil por mês apartir dos próximos 30 dias.
                            </h5>

                            <button onClick={handleClick} id="iniciar-checkout">
                                <p>QUERO MUDAR DE VIDA</p>
                            </button>

                            <div className={styles.discount}>
                                <img src="/discountTag.svg" />
                                <p>Apenas R$ 197,00.</p>
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
