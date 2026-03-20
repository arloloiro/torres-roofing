import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion"; // Importamos Variants para evitar el error de tipos
import { Link } from "@tanstack/react-router";

// 1. Tipamos las animaciones para que TypeScript esté contento
const containerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1, // Los hijos aparecen uno tras otro
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const logoVariants: Variants = {
  hidden: { rotate: -180, opacity: 0, scale: 0.5 },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export const Navbar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0E18]/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* SECCIÓN LOGO */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <motion.img
              variants={logoVariants}
              src="/favicon.svg" // Asegúrate de que esté en public/logo.png
              alt="Torres Roofing Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-black tracking-tighter text-white cursor-pointer uppercase">
              TORRES <span className="text-red-600">ROOFING & Co.</span>
            </span>
          </Link>
        </motion.div>

        {/* MENÚ DE NAVEGACIÓN (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide uppercase">
          <a
            href="#about"
            className="text-white hover:text-red-600 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-red-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-red-600 transition-colors"
          >
            Projects
          </a>

          {/* Categoría Location */}
          <a
            href="#location"
            className="text-white hover:text-red-600 transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3 text-red-600" /> Location
          </a>

          <a
            href="#estimate"
            className="text-white hover:text-red-600 transition-colors"
          >
            Free Estimate
          </a>
        </div>

        {/* CONTACTO Y WHATSAPP */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="hidden sm:flex flex-col items-end mr-2 border-r border-white/10 pr-4">
            <span className="text-[10px] font-black text-red-600 tracking-widest uppercase">
              Se Habla Español
            </span>
            <span className="text-sm font-bold text-white flex items-center gap-1">
              <Phone className="w-3 h-3 text-red-600" /> (555) 123-4567
            </span>
          </div>

          <Button
            className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none rounded-full flex items-center gap-2 px-6 font-bold shadow-lg shadow-green-500/20 transition-all hover:scale-105 active:scale-95"
            onClick={() => window.open("https://wa.me/15551234567", "_blank")}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};
