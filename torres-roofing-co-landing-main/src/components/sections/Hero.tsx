import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1626911049067-d22911465007?q=80&w=2070" 
          alt="Modern Roofing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-primary/20 text-primary border-primary/50 px-4 py-1.5 mb-6 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-primary mr-2" />
              <span className="font-bold tracking-wide">5.0 Google Rated | Fully Licensed & Insured</span>
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
          >
            Protect Your Home. <br />
            <span className="text-primary">Expert Roofing</span> <br />
            You Can Trust.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl leading-relaxed"
          >
            Don't let a small leak turn into a costly disaster. Get your roof repaired or replaced by the local experts. Fast, reliable, and affordable service. 100% Satisfaction Guaranteed.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-white font-bold h-14 px-8 text-lg rounded-full shadow-glow group"
              onClick={() => document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white font-bold h-14 px-8 text-lg rounded-full backdrop-blur-sm flex items-center gap-2"
              onClick={() => window.open('https://wa.me/15551234567', '_blank')}
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
    </section>
  );
};
