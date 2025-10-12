import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import ValueLadder from "@/components/sections/ValueLadder";
import Guarantee from "@/components/sections/Guarantee";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import OfferRecap from "@/components/sections/OfferRecap";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/shared/StickyCTA";

export default function Home() {
  return (
    <main className="relative">
      <StickyCTA />
      <Hero />
      <Proof />
      <ValueLadder />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <OfferRecap />
      <Footer />
    </main>
  );
}
