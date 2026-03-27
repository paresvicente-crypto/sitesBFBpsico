import { motion } from "framer-motion";
import { Paintbrush, Zap, Smartphone, MessageCircle, Target } from "lucide-react";

const items = [
  { icon: Paintbrush, title: "Design profissional", desc: "Visual premium que comunica credibilidade." },
  { icon: Zap, title: "Sites rápidos", desc: "Carregamento veloz para melhor experiência." },
  { icon: Smartphone, title: "Otimizado para celular", desc: "Perfeito em qualquer dispositivo." },
  { icon: MessageCircle, title: "Integração com WhatsApp", desc: "Facilite o contato dos pacientes." },
  { icon: Target, title: "Estratégia para atrair pacientes", desc: "Estrutura pensada para conversão." },
];

const Differentials = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Diferenciais</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">O que torna meus sites únicos.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="feature-card text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent mb-4">
              <item.icon size={24} />
            </div>
            <h3 className="text-sm font-display font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
