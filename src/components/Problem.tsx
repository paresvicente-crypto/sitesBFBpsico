import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const Problem = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
          <AlertTriangle size={28} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          Muitos psicólogos ainda têm presença digital fraca.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Grande parte dos profissionais da psicologia ainda depende apenas de redes sociais ou perfis simples. Um site profissional transmite autoridade, aumenta a confiança dos pacientes e facilita o agendamento de consultas.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Problem;
