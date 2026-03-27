import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Camila Ferreira",
    role: "Psicóloga Clínica",
    text: "O site ficou extremamente profissional e aumentou muito minha credibilidade. Recebi elogios de colegas e pacientes logo na primeira semana.",
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Terapeuta de Casais",
    text: "Agora meus pacientes encontram meu trabalho com muito mais facilidade. O número de agendamentos pelo site superou minhas expectativas.",
  },
  {
    name: "Dra. Juliana Costa",
    role: "Psicóloga Infantil",
    text: "O processo foi super tranquilo e o resultado ficou incrível. O site transmite exatamente a sensação que eu queria: acolhimento e profissionalismo.",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">O que dizem meus clientes</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="feature-card"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
