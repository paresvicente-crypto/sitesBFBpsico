import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Problem />
      <Benefits />
      <Projects />
      <Process />
      <Differentials />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </>
);

export default Index;
