import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title: string;
  description?: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export default function CTABand({ title, description, primaryCTA, secondaryCTA }: CTABandProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-white/90 mb-8">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryCTA.href}>
            <Button
              size="lg"
              variant="secondary"
              className="min-w-[200px]"
              data-testid="button-cta-primary"
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href}>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] bg-white/10 hover:bg-white/20 text-white border-white/30"
                data-testid="button-cta-secondary"
              >
                {secondaryCTA.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
