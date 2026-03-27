import { motion } from "framer-motion";
import { Award, Search, CalendarCheck, FileText, ShieldCheck } from "lucide-react";

const items = [
  { icon: Award, title: "Mais credibilidade profissional", desc: "Um site bem feito transmite confiança e profissionalismo ao primeiro contato." },
  { icon: Search, title: "Presença forte no Google", desc: "Apareça nas buscas quando pacientes procurarem por psicólogos na sua região." },
  { icon: CalendarCheck, title: "Facilidade de agendamento", desc: "Integração com ferramentas de agendamento para facilitar a marcação de consultas." },
  { icon: FileText, title: "Apresentação clara do trabalho", desc: "Mostre suas especialidades, abordagens e diferenciais de forma organizada." },
  { icon: ShieldCheck, title: "Maior confiança dos pacientes", desc: "Pacientes se sentem mais seguros ao encontrar um profissional com presença digital forte." },
];

const Benefits = () => (
  <section id="beneficios" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Benefícios de ter um site profissional
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Veja como um site estratégico pode transformar sua carreira.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="feature-card"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
              <item.icon size={24} />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
