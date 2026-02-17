import 'swiper/css';
import styles from './styles.module.scss';
import SwiperDesktop from './SwiperDesktop';
import SwiperMobile from './SwiperMobile';

export default function SwiperComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.desktop}>
                <SwiperDesktop />
            </div>
            <div className={styles.mobile}>
                <SwiperMobile />
            </div>
        </div>
    );
}
