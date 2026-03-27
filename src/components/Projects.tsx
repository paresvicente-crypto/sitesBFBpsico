import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projectClinico from "@/assets/project-clinico.jpg";
import projectCasais from "@/assets/project-casais.jpg";
import projectInfantil from "@/assets/project-infantil.jpg";
import projectOnline from "@/assets/project-online.jpg";

const projects = [
  { img: projectClinico, title: "Psicólogo Clínico", desc: "Site completo com agendamento online, apresentação de especialidades e blog integrado." },
  { img: projectCasais, title: "Terapia de Casais", desc: "Design acolhedor e convidativo, com foco em conexão emocional e confiança." },
  { img: projectInfantil, title: "Psicólogo Infantil", desc: "Visual lúdico e amigável, pensado para atrair pais e transmitir segurança." },
  { img: projectOnline, title: "Psicoterapia Online", desc: "Foco em atendimento remoto, com integração de videochamada e agendamento." },
];

const Projects = () => (
  <section id="projetos" className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Meus Projetos</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Sites criados com estratégia, design e performance.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="feature-card p-0 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={`Projeto: ${p.title}`}
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
