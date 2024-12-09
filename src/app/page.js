import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Preheader from "@/components/preheader/Preheader";
import Services from "@/components/servicesSection/Services";

export default function Home() {
  return (
   <>
    <Preheader />
    <Navbar />
    <Hero />
    <Services />
   </>
  );
}
