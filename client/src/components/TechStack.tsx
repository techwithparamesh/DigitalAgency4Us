import { SiWordpress, SiHtml5, SiCss3, SiJavascript, SiGit, SiMysql, SiPostgresql } from "react-icons/si";

export default function TechStack() {
  const technologies = [
    { icon: SiWordpress, label: "WordPress", color: "#21759b" },
    { icon: SiHtml5, label: "HTML5", color: "#e34c26" },
    { icon: SiCss3, label: "CSS3", color: "#264de4" },
    { icon: SiJavascript, label: "JavaScript", color: "#f0db4f" },
    { icon: SiGit, label: "Git", color: "#f34f29" },
    { icon: SiMysql, label: "MySQL", color: "#00758f" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  ];

  return (
    <div className="py-12">
      <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
        Technologies We Use
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {technologies.map((tech) => (
          <div
            key={tech.label}
            className="flex flex-col items-center gap-3 hover-elevate p-4 rounded-lg transition-all duration-300"
            data-testid={`tech-${tech.label.toLowerCase()}`}
          >
            <tech.icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: tech.color }} />
            <span className="text-xs md:text-sm font-medium text-muted-foreground">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
