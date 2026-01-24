import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground print:hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold">SS</span>
            <span className="text-primary-foreground/60">|</span>
            <span className="text-primary-foreground/80 text-sm">
              Sudulagunta Sarvagna
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-primary-foreground/80">
            Made with <Heart className="text-accent" size={16} fill="currentColor" /> in India
          </div>

          <p className="text-sm text-primary-foreground/60">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
