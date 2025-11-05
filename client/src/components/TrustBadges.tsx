import { SiWordpress, SiJavascript, SiGit, SiMysql, SiPostgresql } from "react-icons/si";
import { Code, Database, Server } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: SiWordpress, label: "WordPress" },
    { icon: Code, label: "Custom Code" },
    { icon: SiGit, label: "Repositories" },
    { icon: Server, label: "Hosting" },
    { icon: Database, label: "Databases" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-8">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          data-testid={`badge-trust-${badge.label.toLowerCase()}`}
        >
          <badge.icon className="w-5 h-5" />
          <span className="text-sm font-medium">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
