import { Code, Database, Layout, Server, Cloud, Wrench, BookOpen, Users, Clock, Brain, MessageCircle, Lightbulb, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={24} />,
    skills: [
      { name: "C", level: 75 },
      { name: "Java", level: 85 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Web Development",
    icon: <Layout size={24} />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "Material-UI", level: 70 },
    ],
  },
  {
    title: "Data Science & ML",
    icon: <Brain size={24} />,
    skills: [
      { name: "Pandas / NumPy", level: 80 },
      { name: "Scikit-learn", level: 75 },
      { name: "Data Analysis", level: 80 },
      { name: "Data Visualization", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: [
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={24} />,
    skills: [
      { name: "AWS", level: 70 },
      { name: "Docker", level: 70 },
      { name: "GitHub Actions", level: 75 },
    ],
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={24} />,
    skills: [
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "JUnit", level: 70 },
    ],
  },
];

const softSkills = [
  { name: "Problem Solving", icon: <Lightbulb size={20} /> },
  { name: "Analytical Thinking", icon: <Brain size={20} /> },
  { name: "Teamwork", icon: <Users size={20} /> },
  { name: "Communication", icon: <MessageCircle size={20} /> },
  { name: "Leadership", icon: <Zap size={20} /> },
  { name: "Quick Learning", icon: <Clock size={20} /> },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
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
