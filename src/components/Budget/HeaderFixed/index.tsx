import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const HeaderFixed = () => {
    const [scrolled, setScrolled] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 50;
            setScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Valores possíveis de dias
        const possibleDays = [29, 14, 17, 11];
        // Escolhe um valor aleatório do array
        const randomDays =
            possibleDays[Math.floor(Math.random() * possibleDays.length)];

        // Determina a data alvo com base nos dias sorteados
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + randomDays);

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                // Caso a data já tenha passado, zera o contador.
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        // Atualiza imediatamente ao montar
        updateCountdown();

        // Atualiza a cada segundo
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>Promoção</p>
                    <span>do rei</span>
                </div>
                <div className={styles.countDown}>
                    <div className={styles.block}>
                        <p>{timeLeft.days} DIAS</p>
                    </div>
                    <span>:</span>
                    <div className={styles.block1}>
                        <p>{timeLeft.hours}H</p>
                    </div>
                    <span>:</span>
                    <div className={styles.block2}>
                        <p>{timeLeft.minutes} MIN</p>
                    </div>
                    <span>:</span>
                    <div className={styles.block3}>
                        <p>{timeLeft.seconds} SEG</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderFixed;
