import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const Skills = () => (
  <section id="skills" className="relative py-24">
    <div className="absolute inset-0 bg-mesh opacity-40" />
    <div className="container relative mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Skills & Tools</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          My <span className="text-gradient">tech stack</span>
        </h2>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 shadow-soft"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-hero opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
            <h3 className="mb-4 font-display text-lg font-bold text-foreground">{cat.group}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
