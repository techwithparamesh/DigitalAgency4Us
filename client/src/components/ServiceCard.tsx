import { Code, Palette, Search, Zap, Headphones } from "lucide-react";
import { SiWordpress } from "react-icons/si";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = {
  wordpress: SiWordpress,
  code: Code,
  palette: Palette,
  search: Search,
  zap: Zap,
  headset: Headphones,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  features: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const Icon = iconMap[icon] || Code;

  return (
    <Card className="hover-elevate transition-all duration-300" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-1">✓</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
