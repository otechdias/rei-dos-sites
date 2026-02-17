import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useQueryParams } from "@/context/QueryContext";
import { getKiwifyUrl } from "@/utils/urlUtils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

interface BannerTimerProps {
  targetDate: string; // Data de término como string
}

export default function BannerTimer({ targetDate }: BannerTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const { params } = useQueryParams();

  const handleRedirect = () => {
    window.location.href = getKiwifyUrl(params) || "";
  };

  useEffect(() => {
    const countdownDate = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.banner}>
      <div className={styles.info}>
        <span>Pré-venda RDC</span>
        <span>
          • De: <del>R$ 147,00</del> Por: <strong>R$ 97,00</strong>
        </span>
        <span>
          • Encerramento:{" "}
          <strong>
            {timeLeft.days} D {timeLeft.hours} H {timeLeft.minutes} M
          </strong>
        </span>
      </div>
      <button className={styles.button} onClick={handleRedirect}>
        Garanta sua vaga!
      </button>
    </div>
  );
}
