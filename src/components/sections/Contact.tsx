import { motion } from "framer-motion";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const Contact = () => (
  <section id="contact" className="relative overflow-hidden py-24">
    <div className="absolute inset-0 bg-gradient-hero opacity-95" />
    <div className="absolute -top-20 left-1/4 h-72 w-72 animate-blob rounded-full bg-white/20 blur-3xl" />
    <div className="absolute -bottom-20 right-1/4 h-72 w-72 animate-blob rounded-full bg-white/10 blur-3xl [animation-delay:3s]" />

    <div className="container relative mx-auto max-w-4xl px-4 text-center text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">Let's Connect</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl md:text-6xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          I'm always open to discussing frontend roles, freelance work, or interesting collaborations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3"
      >
        <a href={`mailto:${profile.email}`} className="group rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20">
          <Mail className="mx-auto mb-2 h-6 w-6" />
          <div className="text-xs uppercase tracking-wider opacity-80">Email</div>
          <div className="mt-1 text-sm font-medium">{profile.email}</div>
        </a>
        <a href={`tel:${profile.phone}`} className="group rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20">
          <Phone className="mx-auto mb-2 h-6 w-6" />
          <div className="text-xs uppercase tracking-wider opacity-80">Phone</div>
          <div className="mt-1 text-sm font-medium">{profile.phoneDisplay}</div>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20">
          <Linkedin className="mx-auto mb-2 h-6 w-6" />
          <div className="text-xs uppercase tracking-wider opacity-80">LinkedIn</div>
          <div className="mt-1 text-sm font-medium">srushti-kale</div>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Button asChild size="lg" className="rounded-full bg-white text-primary shadow-glow hover:bg-white/90">
          <a href={profile.resume} download>
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
          <a href={`mailto:${profile.email}`}>
            <Mail className="h-5 w-5" />
            Say Hello
          </a>
        </Button>
      </motion.div>

      <div className="mt-10 inline-flex items-center gap-1.5 text-sm text-white/80">
        <MapPin className="h-4 w-4" /> {profile.location}
      </div>
    </div>
  </section>
);

export default Contact;
