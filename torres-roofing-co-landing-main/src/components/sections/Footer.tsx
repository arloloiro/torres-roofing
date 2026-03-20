import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background/80 border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <span className="text-2xl font-black tracking-tighter text-white">
              TORRES <span className="text-primary">ROOFING & Co.</span>
            </span>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Providing top-quality roofing solutions for residential and
              commercial properties with over 15 years of experience. Fully
              licensed and insured for your peace of mind.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all"
              >
                <Instagram className="w-5 h-5 text-white/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all"
              >
                <Facebook className="w-5 h-5 text-white/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all"
              >
                <Twitter className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">
              Our Services
            </h4>
            <ul className="space-y-3 text-foreground/60 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Residential Roofing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commercial Roofing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Roof Repair & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Storm Damage Restoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gutter Installation
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3 text-foreground/60 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Get Free Estimate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  View Project Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">
              Contact Info
            </h4>
            <div className="space-y-4 text-foreground/60 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Industrious: 1301 McKinney St Suite 300 <br /> Houston, TX
                  77001
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@torresroofingco.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-foreground/40 uppercase tracking-widest font-bold">
          <p>© 2026 torresroofingco. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
