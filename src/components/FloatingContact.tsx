import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

const FloatingContact = () => {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    "Hi Srushti! I came across your portfolio and would love to connect."
  )}`;
  const telUrl = `tel:${profile.phone}`;

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
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-float"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30" />
        <MessageCircle className="relative h-6 w-6" fill="currentColor" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          WhatsApp
        </span>
      </motion.a>

      <motion.a
        href={telUrl}
        aria-label="Call Srushti"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-call text-white shadow-float"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-call opacity-30" />
        <Phone className="relative h-6 w-6" fill="currentColor" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Call Now
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingContact;
