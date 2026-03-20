import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PrivacyPolicy = () => {
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
            Privacy <span className="text-primary">Policy</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground/70">
            <p className="text-sm font-medium text-foreground/40 italic">Last Updated: March 19, 2026</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              <p>
                Torres Roofing Co. (\"we,\" \"us,\" or \"our\") collects information that you provide directly to us when you fill out our contact or estimate forms, including your name, email address, phone number, and service address.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide roofing estimates and services</li>
                <li>Communicate with you about your projects</li>
                <li>Send updates and promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website or providing our services, as long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, you may contact us using the information below:
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

export default PrivacyPolicy;
