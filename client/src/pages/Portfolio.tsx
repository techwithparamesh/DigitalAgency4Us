import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/PortfolioCard";
import CTABand from "@/components/CTABand";
import portfolioData from "@/data/portfolio.json";
import veluxeImage from "@assets/generated_images/Veluxe_Interiors_portfolio_0a9b0693.png";
import msPropertiesImage from "@assets/generated_images/MS_Properties_portfolio_d659a643.png";

const imageMap: Record<string, string> = {
  veluxe: veluxeImage,
  msproperties: msPropertiesImage,
};

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "wordpress" | "custom">("all");

  const filteredProjects = portfolioData.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our recent projects. Each one built with care, delivered on time, and optimized for performance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                data-testid="button-filter-all"
              >
                All Projects
              </Button>
              <Button
                variant={filter === "wordpress" ? "default" : "outline"}
                onClick={() => setFilter("wordpress")}
                data-testid="button-filter-wordpress"
              >
                WordPress
              </Button>
              <Button
                variant={filter === "custom" ? "default" : "outline"}
                onClick={() => setFilter("custom")}
                data-testid="button-filter-custom"
              >
                Custom Code
              </Button>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  {...project}
                  image={imageMap[project.image]}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found for this filter.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Here are a few examples from our portfolio. So far, we have delivered complete websites for MS Properties and Veluxe Interiors, and we are actively expanding our project list.
            </p>
            <p className="text-sm text-muted-foreground">
              All projects include responsive design, SEO optimization, and performance tuning.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to See Your Project Here?"
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Services", href: "/services" }}
      />
    </div>
  );
}
