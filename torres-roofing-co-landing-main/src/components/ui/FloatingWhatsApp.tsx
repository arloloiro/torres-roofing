import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp = () => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow duration-300 animate-pulse-soft"
      onClick={() => window.open('https://wa.me/15551234567', '_blank')}
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
        1
      </span>
    </motion.button>
  );
};
