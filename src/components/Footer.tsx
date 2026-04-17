import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} {profile.name} · Built with React, Tailwind & ♥
    </div>
  </footer>
);

export default Footer;
