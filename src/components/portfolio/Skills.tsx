import { Code, Database, Layout, Server, Users, Clock } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={24} />,
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Layout size={24} />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Bootstrap", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
];

const softSkills = [
  { name: "Adaptability", icon: <Users size={20} /> },
  { name: "Team Work", icon: <Users size={20} /> },
  { name: "Time Management", icon: <Clock size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all group cursor-default"
              >
                <span className="text-primary group-hover:text-primary-foreground transition-colors">
                  {skill.icon}
                </span>
                <span className="font-medium text-foreground group-hover:text-primary-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
