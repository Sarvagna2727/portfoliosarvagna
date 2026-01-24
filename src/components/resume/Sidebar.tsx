import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-navy-dark text-sidebar-foreground p-8 lg:p-10 min-h-screen flex flex-col">
      {/* Profile Section */}
      <div className="text-center mb-10 animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-gold overflow-hidden bg-sidebar-accent">
          <div className="w-full h-full flex items-center justify-center text-gold text-4xl font-display font-bold">
            SS
          </div>
        </div>
        <h1 className="font-display text-2xl lg:text-3xl font-bold text-sidebar-foreground mb-2">
          Sudulagunta Sarvagna
        </h1>
        <p className="text-gold text-sm font-medium tracking-wider uppercase">
          Computer Science Student
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mb-10 animate-slide-right" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-gold font-display text-lg font-semibold border-b border-sidebar-border pb-2 mb-4">
          Contact
        </h2>
        <ContactItem icon={<Phone size={16} />} text="+91-8367378981" />
        <ContactItem icon={<Mail size={16} />} text="sarvagnachowdary@gmail.com" />
        <ContactItem 
          icon={<Linkedin size={16} />} 
          text="linkedin.com/in/sarvagna-sudulagunta" 
          isLink 
          href="https://www.linkedin.com/in/sarvagna-sudulagunta"
        />
        <ContactItem icon={<MapPin size={16} />} text="Guntur, India" />
      </div>

      {/* Technical Skills */}
      <div className="mb-10 animate-slide-right" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-gold font-display text-lg font-semibold border-b border-sidebar-border pb-2 mb-4">
          Technical Skills
        </h2>
        <div className="space-y-4">
          <SkillCategory title="Languages" skills={["C", "Java", "Python"]} />
          <SkillCategory title="Frontend" skills={["HTML", "CSS", "React.js", "Bootstrap"]} />
          <SkillCategory title="Backend" skills={["Node.js", "Express.js"]} />
          <SkillCategory title="Database" skills={["MySQL", "MongoDB"]} />
        </div>
      </div>

      {/* Soft Skills */}
      <div className="animate-slide-right" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-gold font-display text-lg font-semibold border-b border-sidebar-border pb-2 mb-4">
          Soft Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Adaptability", "Team Work", "Time Management"].map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 bg-sidebar-accent text-sidebar-foreground text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

const ContactItem = ({ 
  icon, 
  text, 
  isLink = false, 
  href 
}: { 
  icon: React.ReactNode; 
  text: string; 
  isLink?: boolean;
  href?: string;
}) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="text-gold">{icon}</span>
    {isLink ? (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sidebar-foreground/90 hover:text-gold transition-colors break-all"
      >
        {text}
      </a>
    ) : (
      <span className="text-sidebar-foreground/90 break-all">{text}</span>
    )}
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="text-sidebar-foreground/80 text-xs uppercase tracking-wider mb-2">{title}</h3>
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-2 py-0.5 bg-sidebar-accent/50 text-sidebar-foreground/90 text-xs rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Sidebar;
