import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="container mx-auto max-w-5xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Experience</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Where I've <span className="text-gradient">built things</span>
        </h2>
      </motion.div>

      {experience.map((exp, i) => (
        <motion.article
          key={exp.company}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative rounded-3xl glass p-7 shadow-soft sm:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Briefcase className="h-3.5 w-3.5" /> {exp.role}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{exp.company}</h3>
              <p className="text-sm text-muted-foreground">{exp.product}</p>
            </div>
            <div className="text-right">
              <div className="font-medium text-foreground">{exp.period}</div>
              <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {exp.location}
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {exp.points.map((p, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-hero" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;
