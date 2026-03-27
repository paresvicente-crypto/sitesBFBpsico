import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Briefing", desc: "Entendo suas necessidades, público-alvo e objetivos profissionais." },
  { icon: Palette, num: "02", title: "Design", desc: "Crio um layout exclusivo alinhado à sua identidade e ao seu nicho." },
  { icon: Code2, num: "03", title: "Desenvolvimento", desc: "Transformo o design em um site rápido, responsivo e otimizado." },
  { icon: Rocket, num: "04", title: "Publicação", desc: "Publico seu site e garanto que tudo esteja funcionando perfeitamente." },
];

const Process = () => (
  <section id="processo" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Como funciona</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Um processo simples e transparente do início ao fim.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5">
              <s.icon size={28} />
            </div>
            <span className="block text-xs font-bold text-accent mb-2 tracking-widest">{s.num}</span>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
