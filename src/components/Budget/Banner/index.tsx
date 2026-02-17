import BannerDesktop from './BannerDesktop';
import BannerMobile from './BannerMobile';
import styles from './styles.module.scss';

const Banner = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.mobileSection}>
                    <BannerMobile />
                </div>
                <div className={styles.desktopSection}>
                    <BannerDesktop />
                </div>
            </section>
        </>
    );
};

export default Banner;
