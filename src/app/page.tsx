import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyBarbarian from "@/components/WhyBarbarian";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <WhyBarbarian />
      <Contact />
      <Footer />
    </main>
  );
}
