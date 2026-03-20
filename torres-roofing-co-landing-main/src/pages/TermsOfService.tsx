import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="group"
              onClick={() => window.history.back()}
            >
              <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Terms of <span className="text-primary">Service</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground/70">
            <p className="text-sm font-medium text-foreground/40 italic">Last Updated: March 19, 2026</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Torres Roofing Co. website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Scope of Services</h2>
              <p>
                Torres Roofing Co. provides roofing services, including inspections, repairs, and replacements for residential and commercial properties. All estimates are based on visible conditions and may change upon further inspection.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. User Obligations</h2>
              <p>
                You agree to provide accurate, current, and complete information as requested in our forms. You are responsible for maintaining the confidentiality of any information you share with us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and designs, is the property of Torres Roofing Co. and is protected by intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
              <p>
                Torres Roofing Co. will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of our website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Your continued use of the website following any changes signifies your acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                <p className="text-white font-bold">Torres Roofing Co.</p>
                <p>Email: info@torresroofingco.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
