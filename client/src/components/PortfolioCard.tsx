import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PortfolioCardProps {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
}

export default function PortfolioCard({ title, description, url, tags, image }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group" data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="sm" data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              <ExternalLink className="w-4 h-4 mr-2" />
              View Site
            </Button>
          </a>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" data-testid={`badge-${tag.toLowerCase().replace(/\s+/g, '-')}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
