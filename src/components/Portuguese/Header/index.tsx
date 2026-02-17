import styles from './styles.module.scss';

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>
                        Entenda como algumas pessoas comuns estão ganhando
                        <strong>mais de R$10mil por mês.</strong>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
