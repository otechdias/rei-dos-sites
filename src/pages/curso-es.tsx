import Footer from "@/components/Spanish/Footer";
import Guarantee from "@/components/Spanish/Guarantee";
import Header from "@/components/Spanish/Header";
import Modulos from "@/components/Spanish/Modulos";
import MovingBars from "@/components/Spanish/MovingBars";
import Price from "@/components/Spanish/Price";
import Questions from "@/components/Spanish/Questions";
import SectionOne from "@/components/Spanish/SectionOne";
import SectionTwo from "@/components/Spanish/SectionTwo";
import StickFooter from "@/components/Spanish/StickFooter";
import Students from "@/components/Spanish/Swiper";
import ZoomEffect from "@/components/Spanish/ZoomEffect";
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
      <StickFooter title={pageTitle} />
    </>
  );
}
