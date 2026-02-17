import { useState } from 'react';
import ModalForm from '../Modal';
import styles from './styles.module.scss';

export default function Who() {
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
                    <div className={styles.images}>
                        <img src="/pic2.webp" alt="three" />
                        <img src="/pic1.webp" alt="one" />
                    </div>
                    <div className={styles.text}>
                        <h3>sobre</h3>
                        <h2>
                            quem é <span>herbert?</span>
                        </h2>
                        <p>
                            Herbert Carnaúba é um jovem empreendedor que ficou
                            conhecido como o “rei dos sites”. Com apenas 22
                            anos, ele saiu de São Paulo e foi para Curitiba em
                            busca de oportunidades para construir sua carreira.
                        </p>
                        <p>
                            Foi lá que ele descobriu sua paixão pela criação de
                            sites e decidiu investir nesse ramo. Com muita
                            dedicação e esforço, Herbert construiu um império de
                            criação de sites que o tornou referência no mercado.
                        </p>
                        <p>
                            Hoje em dia, ele é admirado por muitos jovens
                            empreendedores que buscam seguir seus passos e se
                            tornarem bem-sucedidos no mundo dos negócios. Com
                            seu exemplo inspirador, Herbert Carnaúba mostra que
                            é possível conquistar seus sonhos e alcançar o
                            sucesso com trabalho duro e perseverança.
                        </p>
                        <button onClick={handleModalOpen}>
                            fazer orçamento
                        </button>
                    </div>
                </div>
            </section>
            {isModalOpen && <ModalForm onClose={handleModalClose} />}
        </>
    );
}
