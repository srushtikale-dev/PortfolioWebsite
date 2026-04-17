import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const Hero = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
    <div className="absolute inset-0 bg-mesh" />
    <div className="absolute -top-20 -left-20 h-72 w-72 animate-blob rounded-full bg-primary/30 blur-3xl" />
    <div className="absolute top-40 -right-20 h-80 w-80 animate-blob rounded-full bg-secondary/30 blur-3xl [animation-delay:2s]" />
    <div className="absolute bottom-10 left-1/3 h-64 w-64 animate-blob rounded-full bg-accent/30 blur-3xl [animation-delay:4s]" />

    <div className="container relative z-10 mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground shadow-soft"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          <br />
          <span className="text-foreground/90">a {profile.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{profile.location}</span>
          <span className="inline-flex items-center gap-1.5"><Mail className="h-4 w-4 text-primary" />{profile.email}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="rounded-full bg-gradient-hero text-primary-foreground shadow-glow transition-transform hover:scale-105 hover:opacity-95">
            <a href={profile.resume} download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur transition-transform hover:scale-105 hover:bg-primary/5">
            <a href="#projects">
              View Work
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
