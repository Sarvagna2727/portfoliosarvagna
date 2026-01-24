import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Library Management System",
    description:
      "A comprehensive Online consultation platform utilizing the MERN Stack. Features include real-time consultations, appointment booking, video calls, and payment integration.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Blockchain Projects",
    description:
      "Actively participated in various blockchain projects as a Technical Core Member at The Blockchain Hub, contributing to decentralized applications and smart contracts.",
    technologies: ["Blockchain", "Web3", "Smart Contracts"],
    image: null,
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Food Sanitation Awareness",
    description:
      "Conducted surveys and awareness sessions on food hygiene and sanitation for street vendors as part of a social internship initiative.",
    technologies: ["Research", "Data Analysis", "Community Outreach"],
    image: null,
    github: null,
    live: null,
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all group ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div className={`bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${
                project.featured ? "h-64" : "h-48"
              }`}>
                <Folder className="text-primary/40 group-hover:text-accent transition-colors" size={project.featured ? 80 : 60} />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github size={20} />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
