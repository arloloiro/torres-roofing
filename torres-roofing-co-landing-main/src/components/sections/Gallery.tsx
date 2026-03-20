import { motion } from 'framer-motion';

const images = [
  "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2FRoofingProject1__8c07ac7a.jpg?alt=media&token=e2b8569c-486d-491d-a3c0-447bcc8f21e4",
  "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2FRoofingProject2__484ae6ea.png?alt=media&token=772f9942-3472-4787-9f77-cf11e229e9cb",
  "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2FRoofingProject3__47c3db7f.jpg?alt=media&token=a854cb64-8379-4481-89a2-3d2974f49599",
  "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=600",
  "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=600",
  "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F6b5CLfBjvJXXfNpIJ630pc7lJ873%2FRoofingProject6__08ac8cc9.jpg?alt=media&token=29ca0bb0-dc9e-43ca-83d3-5fbdb7e12bcf"
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Project <span className="text-primary">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-lg max-w-2xl mx-auto"
          >
            A closer look at our latest residential and commercial roofing projects. Quality that speaks for itself.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-glow-red transition-shadow duration-500"
            >
              <img 
                src={src} 
                alt={`Roofing Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold bg-primary px-4 py-2 rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
