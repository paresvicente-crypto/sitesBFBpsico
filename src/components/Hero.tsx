import { motion } from "framer-motion";
import heroImg from "@/assets/hero-mockup.jpg";

const Hero = () => (
  <section className="section-padding pt-32 md:pt-40 overflow-hidden">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold text-accent mb-4 tracking-wide uppercase">
            Especialista em sites para psicólogos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-display font-extrabold leading-tight text-foreground mb-6">
            Sites profissionais para psicólogos que querem{" "}
            <span className="gradient-text">atrair mais pacientes.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Eu crio sites modernos, rápidos e estratégicos para psicólogos e terapeutas que desejam fortalecer sua presença online e transmitir profissionalismo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={heroImg} alt="Mockup de site para psicólogos em notebook e celular" width={1280} height={800} className="w-full h-auto" />
          </div>
          <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl bg-secondary" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
