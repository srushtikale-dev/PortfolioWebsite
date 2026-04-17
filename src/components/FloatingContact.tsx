import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

const FloatingContact = () => {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    "Hi Srushti! I came across your portfolio and would love to connect."
  )}`;
  const telUrl = `tel:${profile.phone}`;

  const baseBtn =
    "group relative flex h-12 w-12 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-xl border border-primary/20 shadow-soft transition-all hover:border-primary/50 hover:text-primary hover:shadow-glow";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={baseBtn}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
          WhatsApp
        </span>
      </motion.a>

      <motion.a
        href={telUrl}
        aria-label="Call Srushti"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={baseBtn}
      >
        <Phone className="h-5 w-5" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
          Call Now
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingContact;
