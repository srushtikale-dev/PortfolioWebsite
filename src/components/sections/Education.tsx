import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

const Education = () => (
  <section id="education" className="relative py-24">
    <div className="container mx-auto max-w-5xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Education</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Academic <span className="text-gradient">foundation</span>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl glass p-6 shadow-soft"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold">{e.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">{e.period}</span>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">{e.grade}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
