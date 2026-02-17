import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useQueryParams } from "@/context/QueryContext";
import { getKiwifyUrl } from "@/utils/urlUtils";

export default function Banner() {
  const { params } = useQueryParams();

  const handleRedirect = () => {
    window.location.href = getKiwifyUrl(params) || "";
  };
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true); // Substitui o thumbnail pelo iframe
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js";
    script.setAttribute("data-id", "6784e725ad735d16cd74217e");
    document.head.appendChild(script);
  }, []);

  return (
    <div className={styles.content}>
      <img src="/rotate.svg" alt="" className={styles.rotate} />
      <style jsx global>{`
        .elementor-element:has(#ifr_6784e725ad735d16cd74217e_wrapper) {
          width: 100%;
        }
      `}</style>
      <div className={styles.leftside}>
        <h1>
          Aprenda a criar sites incríveis.
          <span>
            Domine HTML, CSS, JS
            <br /> e Python
          </span>
          e transforme sua <br />
          ideia em realidade.
        </h1>
        <h5>
          Por apenas R$97,00, aprenda passo a passo como construir um site do
          zero, mesmo sem experiência prévia. Inscreva-se agora e comece a
          programar hoje!
        </h5>
        <div className={styles.buttons}>
          <button className={styles.filled} onClick={handleRedirect}>
            quero aprender agora <img src="/rightArrow.svg" alt="" />
          </button>
          <button onClick={() => handleScroll("premiacao")}>
            veja o que você vai aprender <img src="/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.rightside}>
        <div
          id="ifr_6784fa77fffafbc506ebf9ac_wrapper"
          style={{ margin: "0 auto", width: "100%" }}
        >
          <div
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
            id="ifr_6784fa77fffafbc506ebf9ac_aspect"
          >
            <iframe
              frameBorder="0"
              allowFullScreen
              src="https://scripts.converteai.net/4b7dcf06-4129-47b4-a172-e3169474979f/players/6784fa77fffafbc506ebf9ac/embed.html"
              id="ifr_6784fa77fffafbc506ebf9ac"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              referrerPolicy="origin"
            />
          </div>
        </div>

        <div className={styles.buttons2}>
          <button className={styles.filled} onClick={handleRedirect}>
            quero aprender agora <img src="/rightArrow.svg" alt="" />
          </button>
          <button onClick={() => handleScroll("premiacao")}>
            veja o que você vai aprender <img src="/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
