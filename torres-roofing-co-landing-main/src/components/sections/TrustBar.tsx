import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, Zap } from 'lucide-react';

const trustItems = [
  {
    icon: Calendar,
    text: "15+ Years Experience",
    description: "Serving the local community with pride."
  },
  {
    icon: Zap,
    text: "Same-Day Emergency Tarps",
    description: "Available 24/7 for urgent leak protection."
  },
  {
    icon: ShieldCheck,
    text: "Storm Damage Experts",
    description: "Handling insurance claims seamlessly."
  }
];

export const TrustBar = () => {
  return (
    <section className="bg-secondary/40 backdrop-blur-xl border-y border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 p-4 rounded-2xl group hover:bg-white/5 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{item.text}</h3>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
