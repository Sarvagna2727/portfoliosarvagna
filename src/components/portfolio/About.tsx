import { GraduationCap, MapPin, Award, Calendar, Briefcase } from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Education & Experience */}
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
                    Koneru Lakshmaiah University, Vaddeswaram, Andhra Pradesh
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Aug 2023 – May 2027
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Vaddeswaram, AP
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-semibold rounded-full">
                      CGPA: 9.5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    Experience
                  </h3>
                  <p className="text-primary font-medium">
                    Data Science Virtual Intern
                  </p>
                  <p className="text-muted-foreground text-sm">
                    AICTE – EduSkills (Supported by Altair)
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      April 2025 – June 2025
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>Completed 10-week virtual internship on Data Science</li>
                    <li>Hands-on experience in data analysis & machine learning</li>
                    <li>Data preprocessing, model building, and evaluation</li>
                  </ul>
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
                  { name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy, Sep 2025" },
                  { name: "Oracle Certified Professional", issuer: "Oracle, 2025" },
                  { name: "Aviatrix Certified Engineer", issuer: "Aviatrix, 2025" },
                  { name: "Automation Anywhere Certified RPA Professional", issuer: "2026" },
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

          {/* Right Side - Coursework & Coding Platforms */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Operating Systems",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
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
                Coding Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "LeetCode", url: "https://leetcode.com" },
                  { name: "HackerRank", url: "https://hackerrank.com" },
                  { name: "CodeChef", url: "https://codechef.com" },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-accent/20 text-foreground font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
