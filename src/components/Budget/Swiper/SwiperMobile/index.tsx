import { useState } from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

export default function SwiperMobile() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>
                        o que nossos <span>clientes</span> dizem
                    </h2>
                    <p>
                        Nossos clientes são a nossa maior fonte de motivação.
                        Veja o que eles têm a dizer sobre as soluções digitais
                        que criamos para seus negócios. Cada projeto é único, e
                        a satisfação dos nossos clientes é o nosso maior
                        objetivo.
                    </p>
                </div>
                <div className={styles.swiperContainer}>
                    <div className={styles.gradientLeft}></div>

                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={20}
                        centeredSlides={true}
                        loop={true} // Ativa o loop
                        initialSlide={1}
                        onSlideChange={handleSlideChange}
                        autoplay={{
                            delay: 3000, // Tempo entre os slides em milissegundos
                            disableOnInteraction: false, // Continua autoplay mesmo após interação
                        }}
                        modules={[Autoplay]} // Inclui o módulo Autoplay
                        className="customSwiper"
                    >
                        <SwiperSlide>
                            <img
                                src="/testimony1.jpg"
                                alt="Client Feedback 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/testimony2.jpg"
                                alt="Client Feedback 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/testimony3.jpg"
                                alt="Client Feedback 3"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/testimony5.PNG"
                                alt="Client Feedback 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/testimony6.PNG"
                                alt="Client Feedback 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/testimony7.PNG"
                                alt="Client Feedback 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/testimony8.PNG"
                                alt="Client Feedback 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/testimony9.PNG"
                                alt="Client Feedback 4"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles.gradientRight}></div>

                    <div className={styles.pagination}>
                        {[0, 1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className={`${styles.paginationBullet} ${
                                    index === activeIndex
                                        ? styles.paginationBulletActive
                                        : ''
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
