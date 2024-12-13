import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importe les styles de FontAwesome
config.autoAddCss = false; // Désactive l'ajout automatique du CSS par FontAwesome

import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Preheader from "@/components/preheader/Preheader";
import Services from "@/components/servicesSection/Services";
import Form from "@/components/form/Form";
// import StickyNavbar from "@/components/stickyNavbar/StickyNavbar";

export default function Home() {
  return (
   <>
    <Preheader />
    <Navbar />
    {/* <StickyNavbar /> */}
    <Hero />
    <Services />
    <About />
    <Form />
    <Footer />
   </>
  );
}
