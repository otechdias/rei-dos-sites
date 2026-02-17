import Router from 'next/router';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
interface StickFooterProps {
    title: string;
}
const StickFooter = ({ title }: StickFooterProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

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
        <div
            className={styles.container}
            style={{
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
            }}
        >
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src="/logo2.svg" />
                </div>
                <div className={styles.button}>
                    <button onClick={handleClick} id="iniciar-checkout">
                        <p>INSCRIBIRME</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickFooter;
