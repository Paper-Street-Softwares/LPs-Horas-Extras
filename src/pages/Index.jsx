import React, { Suspense } from "react";
import WhatsappFloatingButton from "../components/buttons/WhatsappFloatingButton";
import Hero from "../sections/Hero";

// Lazy-load dos componentes que não precisam estar no bundle inicial
const About = React.lazy(() => import("../sections/About"));
const Cta = React.lazy(() => import("../sections/Cta"));
const Features = React.lazy(() => import("../sections/Features"));
const Footer = React.lazy(() => import("../sections/Footer"));
const Transformacao = React.lazy(() => import("../sections/Transformacao"));

export default function Index() {
  return (
    <>
      <Hero imagemFocadaBackground={true} />
      <main>
        <Suspense fallback={null}>
          <Features />
          <Transformacao />
          <Cta />
          <About />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsappFloatingButton />
    </>
  );
}
