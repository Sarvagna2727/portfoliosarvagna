import { GraduationCap, Briefcase, Award, Heart } from "lucide-react";

const MainContent = () => {
  return (
    <main className="p-8 lg:p-12 bg-background">
      {/* Objective */}
      <Section 
        icon={<Briefcase className="text-accent" size={24} />} 
        title="Objective"
        delay="0.1s"
      >
        <p className="text-muted-foreground leading-relaxed font-body">
          Aspiring to secure an entry-level role where I can leverage my skills, continuously learn, 
          and contribute to the organization's objectives. I am particularly excited about engaging 
          in innovative projects and internships that foster growth and deliver impactful results.
        </p>
      </Section>

      {/* Education */}
      <Section 
        icon={<GraduationCap className="text-accent" size={24} />} 
        title="Education"
        delay="0.2s"
      >
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Koneru Lakshmaiah Education Foundation
              </h3>
              <p className="text-primary font-medium">Computer Science and Engineering</p>
              <p className="text-muted-foreground text-sm">Guntur, India</p>
            </div>
            <div className="sm:text-right">
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-semibold rounded-full">
                CGPA: 9.56
              </span>
              <p className="text-muted-foreground text-sm mt-2">2023 - 2027 (ongoing)</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground mb-2">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {["Data Structures & Algorithms", "Operating Systems", "Database Management System", "Network Protocols and Security"].map((course) => (
                <span key={course} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Project */}
      <Section 
        icon={<Briefcase className="text-accent" size={24} />} 
        title="Project"
        delay="0.3s"
      >
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Library Management System
              </h3>
              <p className="text-primary font-medium">Team Member</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Led development of a comprehensive Online consultation platform management System utilizing 
            the MERN Stack. Developing applications using MongoDB, Express.js, React, and Node.js. 
            Focused on building a user-friendly platform enabling real-time consultations between users 
            and professionals with features like appointment booking, video calls, and payment integration.
          </p>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Node.js", "MongoDB", "Express.js", "VS Code"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section 
        icon={<Award className="text-accent" size={24} />} 
        title="Certifications"
        delay="0.4s"
      >
        <div className="grid gap-3">
          {[
            { name: "Java (Basic)", issuer: "HackerRank" },
            { name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle" },
            { name: "Multicloud Network Associate", issuer: "Aviatrix" },
            { name: "Scrum Fundamental Certified", issuer: "Scrum" },
          ].map((cert, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Award className="text-accent" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Volunteer Experience */}
      <Section 
        icon={<Heart className="text-accent" size={24} />} 
        title="Volunteer Experience"
        delay="0.5s"
      >
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <h3 className="font-display text-lg font-semibold text-foreground">
              The Blockchain Hub
            </h3>
            <p className="text-primary font-medium text-sm mb-2">Technical Core Member</p>
            <p className="text-muted-foreground text-sm">
              Actively participated in various blockchain projects and contributed to technical initiatives.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Food Sanitation & Street Vendors Initiative
            </h3>
            <p className="text-primary font-medium text-sm mb-2">Social Internship</p>
            <p className="text-muted-foreground text-sm">
              Conducted surveys and awareness sessions on food hygiene and sanitation for street vendors.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

const Section = ({ 
  icon, 
  title, 
  children,
  delay = "0s"
}: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode;
  delay?: string;
}) => (
  <section 
    className="mb-10 animate-slide-up opacity-0" 
    style={{ animationDelay: delay, animationFillMode: "forwards" }}
  >
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </div>
    {children}
  </section>
);

export default MainContent;
