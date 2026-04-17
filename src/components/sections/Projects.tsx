import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const Projects = () => (
  <section id="projects" className="relative py-24">
    <div className="absolute inset-0 bg-mesh opacity-40" />
    <div className="container relative mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Selected Work</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Projects I'm <span className="text-gradient">proud of</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const isExternal = p.url && p.url !== "#";
          return (
            <motion.a
              key={p.name}
              href={p.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass p-6 shadow-soft transition-shadow hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-hero opacity-10 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                {isExternal && (
                  <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
