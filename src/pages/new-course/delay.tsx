import Banner from "@/components/New-Course/Banner";
import Cards from "@/components/New-Course/Cards";
import Depoimentos from "@/components/New-Course/Depoimentos";
import FAQ from "@/components/New-Course/FAQ";
import Footer from "@/components/New-Course/Footer";
import Header from "@/components/New-Course/Header";
import Price from "@/components/New-Course/Price";
import Section2 from "@/components/New-Course/Section2";
import Steps from "@/components/New-Course/Steps";
import BannerTimer from "@/components/New-Course/Timer";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/newCourse.module.scss";
import Link from "next/link";

export default function Home() {
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("ViewContent");
    }

    // Timer para mostrar o conteúdo completo após 30 segundos
    const timer = setTimeout(() => {
      setShowFullContent(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rei Do Código</title>
      </Head>
      <Header />
      <div id="inscricao">
        <BannerTimer targetDate="2025-03-31T23:59:59" />
      </div>
      <div id="desafio">
        <Banner />
      </div>

      {showFullContent && (
        <>
          <div id="como-funciona">
            <Section2 />
          </div>
          <div id="premiacao">
            <Cards />
          </div>
          <div id="depoimentos">
            <Depoimentos />
          </div>
          <div id="steps">
            <Steps />
          </div>
          <div id="price">
            <Price />
          </div>
          <div id="duvidas">
            <FAQ />
          </div>
          <Link
            href="https://wa.me/‪5541987984809‬"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappIcon}
          >
            <img src="/whats.png" alt="WhatsApp" />
          </Link>
          <Footer />
        </>
      )}
    </div>
  );
}
