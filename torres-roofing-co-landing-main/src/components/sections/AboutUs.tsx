import { motion } from 'framer-motion';
import { Users, Heart, Award } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-video lg:aspect-square shadow-2xl border border-white/10">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2Froofingtorres__36aea690.jpg?alt=media&token=c6201f12-b118-46c0-a920-56fec1119c32" 
                alt="Our Team" 
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">15+ Years</p>
                    <p className="text-xs text-foreground/60 uppercase tracking-widest">Of Local Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full" />
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</h4>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Built on <span className="text-primary">Integrity</span> & Family Values.
              </h2>
              
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed mb-10">
                <p>
                  Torres Roofing Co. is more than just a roofing company – we are your neighbors. For over 15 years, we've been protecting homes across the region with dedication and a commitment to excellence.
                </p>
                <p>
                  Founded by the Torres family, our mission has always been to provide honest, reliable, and high-quality roofing services that our community can depend on. We treat every home as if it were our own.
                </p>
                <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                  <p className="text-white font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> 
                    Hablamos Español
                  </p>
                  <p className="text-sm mt-1">
                    Nos enorgullece servir a la comunidad hispana con claridad, respeto y excelencia en cada proyecto.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Family Owned</h5>
                    <p className="text-xs text-foreground/50">Direct family oversight on every project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Community First</h5>
                    <p className="text-xs text-foreground/50">Proudly serving local neighborhoods since day one.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
