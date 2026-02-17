import Cost from '@/components/Portuguese/Cost';
import TikTok from '@/components/Portuguese/TikTok';
import Youtube from '@/components/Portuguese/YouTube';
import { useRouter } from 'next/router';
import Course from '../components/Portuguese/Course';
import styles from '../styles/Home.module.scss';

export default function Home() {
    const router = useRouter();
    const queryParams = '/instagram';
    console.log(queryParams);
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logoSection}>
                        <img src="/Logo.gif" />
                    </div>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <Course urlParams={queryParams} />
                        </div>
                        <div className={styles.right}>
                            <Cost />

                            <Youtube />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <TikTok />
                    </div>
                    <div className={styles.footer}>
                        <img src="/Logo.gif" />
                    </div>
                </div>
            </section>
        </>
    );
}
