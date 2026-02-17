import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { useLayoutEffect } from "react";

interface WebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WebsiteModal({ isOpen, onClose }: WebsiteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      import("gsap").then(({ default: gsap }) => {
        gsap.set(modalRef.current, { display: "block" }); // Ensure the modal is visible before animating
        gsap.fromTo(
          modalRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.5,
          pointerEvents: "all",
        });
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    import("gsap").then(({ default: gsap }) => {
      gsap.to(modalRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          if (modalRef.current) {
            modalRef.current.style.display = "none"; // Hide modal after animation
          }
          onClose(); // Call the onClose callback to update the state
        },
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleClose}>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={styles.modalContent}>
          <h2>Submit Your Website</h2>
          <p>Fill out the form to submit your website for analysis.</p>
        </div>
      </div>
    </div>
  );
}
