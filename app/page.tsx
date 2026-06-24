import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Courses from "@/components/Courses";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Sobre from "@/components/Sobre"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Courses />
      <CTA />
      <Sobre />
      <Projects />
      <Footer />
    </>
  );
}