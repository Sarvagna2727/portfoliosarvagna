import { GraduationCap, MapPin, Award, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Education & Details */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    Education
                  </h3>
                  <p className="text-primary font-medium">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Koneru Lakshmaiah Education Foundation
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      2023 - 2027
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Guntur, India
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-semibold rounded-full">
                      CGPA: 9.56
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-accent" size={24} />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Certifications
                </h3>
              </div>
              <div className="grid gap-3">
                {[
                  { name: "Oracle Cloud Infrastructure 2025 Generative AI Professional", issuer: "Oracle" },
                  { name: "Multicloud Network Associate", issuer: "Aviatrix" },
                  { name: "Scrum Fundamental Certified", issuer: "Scrum" },
                  { name: "Java (Basic)", issuer: "HackerRank" },
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Coursework & Volunteer */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Operating Systems",
                  "Database Management",
                  "Network Protocols & Security",
                  "Object-Oriented Programming",
                  "Web Development",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Volunteer Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">The Blockchain Hub</h4>
                  <p className="text-primary text-sm font-medium">Technical Core Member</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Actively participated in various blockchain projects and technical initiatives.
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Food Sanitation Initiative</h4>
                  <p className="text-primary text-sm font-medium">Social Internship</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Conducted surveys and awareness sessions on food hygiene for street vendors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
