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
import { useEffect } from "react";
import styles from "../styles/whiteCourse.module.scss";
import Link from "next/link";
import WhiteTimer from "@/components/New-Course/WhiteTimer";
import WhiteHeader from "@/components/New-Course/WhiteHeader";
import WhiteBanner from "@/components/New-Course/WhiteBanner";
import WhiteSection2 from "@/components/New-Course/WhiteSection2";
import WhiteCards from "@/components/New-Course/WhiteCards";
import WhiteDepoimentos from "@/components/New-Course/WhiteDepoimentos";
import WhiteSteps from "@/components/New-Course/WhiteSteps";
import WhitePrice from "@/components/New-Course/WhitePrice";
import WhiteFAQ from "@/components/New-Course/WhiteFAQ";

export default function WhiteCourse() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("ViewContent");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rei Do Código</title>
      </Head>
      <WhiteHeader />
      <div id="inscricao">
        <WhiteTimer targetDate="2025-02-15T23:59:59" />
      </div>
      <div id="desafio">
        <WhiteBanner />
      </div>
      <div id="como-funciona">
        <WhiteSection2 />
      </div>
      <div id="premiacao">
        <WhiteCards />
      </div>
      <div id="depoimentos">
        <WhiteDepoimentos />
      </div>
      <div id="steps">
        <WhiteSteps />
      </div>
      <div id="price">
        <WhitePrice />
      </div>
      <div id="duvidas">
        <WhiteFAQ />
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
    </div>
  );
}
