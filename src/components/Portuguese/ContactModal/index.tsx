import { useEffect } from "react";
import styles from "./styles.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const Modal = ({ isOpen, onClose, title }: ModalProps) => {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    if (isOpen) {
      // Adiciona o script do Calendly
      script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Remove o script e limpa recursos ao desmontar o modal
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [isOpen]);

  const handleSubmitWhats = async () => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel").then((module) => {
        const ReactPixel = module.default;
        ReactPixel.track("Budget", {
          content_name: "Orçamento",
          currency: "BRL",
        });
      });
    }
    let redirectUrl = "https://wa.link/4ktma1";
    window.location.href = redirectUrl;
  };

  const handleCalendlyTab = () => {
    window.open(
      "https://calendly.com/leonardo-solidtech/reuniao-de-site",
      "_blank"
    );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <h2>{title}</h2>
          {/* <button className={styles.closeButton} onClick={onClose}>
            ✖
          </button> */}
        </div>
        {/* 
        <div
          className={styles.calendlyInlineWidget}
          data-url="https://calendly.com/leonardo-solidtech/reuniao-de-site"
          style={{
            minWidth: "320px",
            height: "60vh",
            width: "100%",
            maxWidth: "800px",
            background: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        ></div> */}

        <div className={styles.modalButtons}>
          <button className={styles.modalButton} onClick={handleCalendlyTab}>
            Quero agendar minha reunião
          </button>
          <button className={styles.modalButton} onClick={handleSubmitWhats}>
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
