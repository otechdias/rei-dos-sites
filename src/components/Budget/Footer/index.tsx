import { useState } from 'react';
import ModalForm from '../Modal';
import styles from './styles.module.scss';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h5>
                        Pronto para <span>impulsionar seu negócio </span>online{' '}
                    </h5>
                    <p>
                        Entre em contato agora e descubra como podemos
                        transformar sua presença digital em resultados reais.
                    </p>
                    <button className={styles.button} onClick={handleModalOpen}>
                        FAZER ORÇAMENTO GRATUITO
                    </button>
                    <hr />
                    <div className={styles.rights}>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </section>
            {isModalOpen && <ModalForm onClose={handleModalClose} />}
        </>
    );
};

export default Footer;
