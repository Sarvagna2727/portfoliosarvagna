import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-accent overflow-hidden bg-primary/10 flex items-center justify-center">
                <span className="text-accent text-7xl lg:text-8xl font-display font-bold">SS</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground font-bold text-sm text-center leading-tight">
                  Open to<br />Work
                </span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-accent font-medium mb-4 tracking-wider uppercase animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Hello, I'm
            </p>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Sudulagunta<br />
              <span className="text-primary">Sarvagna</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              Computer Science Student & Full Stack Developer
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              Aspiring to leverage my skills in innovative projects that foster growth 
              and deliver impactful results. Passionate about building user-friendly 
              applications with modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <a
                href="https://www.linkedin.com/in/sarvagna-sudulagunta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:sarvagnachowdary@gmail.com"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.8s" }}>
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
