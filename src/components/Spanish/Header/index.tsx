import styles from './styles.module.scss';

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>
                        Entienda como algunas personas comunes estan ganando
                        <strong>mas de U$7mil por mes.</strong>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
