import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => (
  <motion.header
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-40 px-4 py-3"
  >
    <nav className="container mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-5 py-2.5 shadow-soft">
      <a href="#home" className="font-display text-lg font-bold text-gradient">
        SK<span className="text-foreground">.</span>
      </a>
      <ul className="hidden items-center gap-1 md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <Button asChild size="sm" className="rounded-full bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-90">
        <a href={profile.resume} download>
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </Button>
    </nav>
  </motion.header>
);

export default Navbar;
