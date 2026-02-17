import Footer from "@/components/Portuguese/Footer";
import Guarantee from "@/components/Portuguese/Guarantee";
import Header from "@/components/Portuguese/Header";
import Modulos from "@/components/Portuguese/Modulos";
import MovingBars from "@/components/Portuguese/MovingBars";
import Price from "@/components/Portuguese/Price";
import Questions from "@/components/Portuguese/Questions";
import SectionOne from "@/components/Portuguese/SectionOne";
import SectionTwo from "@/components/Portuguese/SectionTwo";
import StickFooter from "@/components/Portuguese/StickFooter";
import Students from "@/components/Portuguese/Swiper";
import ZoomEffect from "@/components/Portuguese/ZoomEffect";

import { useEffect } from "react";

export default function Home() {
  const pageTitle = "curso";
  return (
    <>
      <Header />
      <SectionOne title={pageTitle} />
      <SectionTwo title={pageTitle} />
      <MovingBars />
      <Guarantee />
      <Students title={pageTitle} />
      <ZoomEffect />
      <Modulos />
      <Price title={pageTitle} />
      <Questions />
      <Footer />
      <StickFooter title={pageTitle} buttonText="LIBERAR ACESSO" />
    </>
  );
}
