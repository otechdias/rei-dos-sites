import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

interface Squares3Props {
    color: string;
    borderColor: string;
    containerColor: string;
}

const Squares3 = ({ color, borderColor, containerColor }: Squares3Props) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <>
            <motion.div
                ref={ref}
                className={styles.container}
                variants={variants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ borderColor, color, backgroundColor: containerColor }}
            >
                <div className={styles.content}>
                    <div className={styles.texts}>
                        <div className={styles.top}>
                            <h4 style={{ color }}>Módulo 3</h4>
                        </div>
                        <div className={styles.title}>
                            <h3 style={{ color }}>Estratégias de venda</h3>
                        </div>
                        <div className={styles.body}>
                            <h5 style={{ color }}>
                                Potencialize suas vendas! Aprenda a se conectar
                                com os clientes, criar ofertas atrativas e
                                fechar negócios de forma eficiente. Transforme
                                possibilidades em lucros conosco e destaque-se
                                no mundo das vendas!
                            </h5>
                        </div>
                    </div>
                    <hr
                        className={styles.hr}
                        style={{ backgroundColor: borderColor }}
                    />
                    <div className={styles.bottom}>
                        <h4 style={{ color }}>
                            Valor: <span>R$319,00</span>
                        </h4>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Squares3;
