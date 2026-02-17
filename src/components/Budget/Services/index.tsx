import styles from './styles.module.scss';

export default function Services() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <button>Orçamento Grátis</button>
                    <h2>
                        Vamos Construir o Seu <span>Sucesso Digital</span>
                    </h2>
                    <p>
                        Entre em contato agora e descubra como podemos ajudar
                        seu negócio a crescer online. Solicite uma proposta
                        gratuita!
                    </p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>Sites Institucionais</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Sites profissionais e personalizados para empresas
                            que desejam ter uma presença online sólida e
                            confiável.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>Landing Pages Otimizadas</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Páginas de alta conversão para campanhas e capturas
                            de leads, projetadas para impulsionar resultados.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>Lojas Virtuais (E-commerce)</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Plataformas completas para venda online, com
                            funcionalidades modernas e uma experiência de compra
                            incrível.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>SISTEMAS PERSONALIZADOS</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Soluções sob medida para atender às necessidades
                            específicas do seu negócio, com eficiência e
                            inovação.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>APLICATIVOS</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Desenvolvimento de aplicativos modernos e funcionais
                            para Android e iOS, projetados para engajar seus
                            usuários.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>TRÁFEGO PAGO</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Estratégias de anúncios online para atrair clientes
                            e aumentar a visibilidade da sua marca rapidamente.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>Blog Corporativo</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Criação de blogs profissionais para compartilhar
                            conteúdo relevante e engajar sua audiência.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3>SEO e CRO</h3>
                            <img src="/arrow3.svg" alt="arrow" />
                        </div>
                        <p>
                            Otimização para mecanismos de busca e conversão para
                            levar seu site ao topo e maximizar resultados.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
