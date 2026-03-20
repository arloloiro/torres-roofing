import { motion } from 'framer-motion';
import { Home, Hammer, CloudLightning } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    description: "Complete overhaul with premium materials. Lifetime warranty available.",
    image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2FRoofReplacement__2973f587.webp?alt=media&token=91f7d874-5097-4b2c-8cf7-21282e267ad0"
  },
  {
    icon: Hammer,
    title: "Expert Repairs",
    description: "Fixing leaks, missing shingles, and structural issues fast and affordably.",
    image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2FExpertRepairs__fd20922a.jpeg?alt=media&token=3c9a6c01-a40f-469a-819b-11379649bf52"
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "Fast evaluation and tarping after severe weather. Insurance assistance.",
    image: "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2FStormDamage__b1b72863.jpg?alt=media&token=9e369bdc-8e6a-45b6-af7b-54b1db843c5c"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden light-section">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Our Roofing <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
          >
            From small repairs to complete replacements, we provide the highest quality craftsmanship for your peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="group relative overflow-hidden bg-slate-50 border-slate-200 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-red h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <CardHeader className="pt-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More 
                    <span className="text-lg">→</span>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
    </section>
  );
};
