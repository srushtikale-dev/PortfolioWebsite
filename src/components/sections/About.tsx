import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import { about } from "@/data/portfolio";

const stats = [
  { icon: Code2, label: "Years Experience", value: "2+" },
  { icon: Rocket, label: "Projects Shipped", value: "10+" },
  { icon: Zap, label: "Performance Focus", value: "100%" },
  { icon: Users, label: "Agile Teams", value: "∞" },
];

const About = () => (
  <section id="about" className="relative py-24">
    <div className="container mx-auto max-w-5xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Building <span className="text-gradient">delightful</span> web experiences
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground"
      >
        {about}
      </motion.p>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl glass p-5 text-center shadow-soft"
          >
            <s.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
            <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
