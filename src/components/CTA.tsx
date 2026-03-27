import { motion } from "framer-motion";

const CTA = () => (
  <section id="cta" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
        style={{ background: "var(--hero-gradient)" }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Seu consultório merece uma presença digital profissional.
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Um site bem estruturado pode transformar a forma como pacientes encontram e percebem seu trabalho.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTA;
