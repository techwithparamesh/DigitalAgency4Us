import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrustBadges from "@/components/TrustBadges";
import TechStack from "@/components/TechStack";
import CTABand from "@/components/CTABand";
import servicesData from "@/data/services.json";
import portfolioData from "@/data/portfolio.json";
import testimonialsData from "@/data/testimonials.json";
import heroImage from "@assets/generated_images/Hero_workspace_image_256f1760.png";
import veluxeImage from "@assets/generated_images/Veluxe_Interiors_portfolio_0a9b0693.png";
import msPropertiesImage from "@assets/generated_images/MS_Properties_portfolio_d659a643.png";
import hemathImage from "@assets/generated_images/Hemath_Kumar_testimonial_10f98419.png";
import rameshImage from "@assets/generated_images/Ramesh_Goud_testimonial_d246d479.png";

const imageMap: Record<string, string> = {
  veluxe: veluxeImage,
  msproperties: msPropertiesImage,
  hemath: hemathImage,
  ramesh: rameshImage,
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 18, 32, 0.8), rgba(11, 18, 32, 0.6)), url(${heroImage})`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            We build, host & scale websites that grow your business
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Professional web development with WordPress or custom code. Full-stack builds with hosting and maintenance included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact">
              <Button size="lg" className="min-w-[180px]" data-testid="button-hero-quote">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[180px] bg-white/10 hover:bg-white/20 text-white border-white/30"
                data-testid="button-hero-work"
              >
                View Our Work
              </Button>
            </Link>
          </div>
          <TrustBadges />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we ship is responsive, fast, and SEO-ready
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} icon={service.icon as any} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" data-testid="button-all-services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent projects we're proud to showcase
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.map((project) => (
              <PortfolioCard
                key={project.id}
                {...project}
                image={imageMap[project.image]}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" data-testid="button-all-portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          <div className="relative">
            <div className="max-w-2xl mx-auto">
              <TestimonialCard
                {...testimonialsData[currentTestimonial]}
                image={imageMap[testimonialsData[currentTestimonial].image]}
              />
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                data-testid="button-testimonial-prev"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                data-testid="button-testimonial-next"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStack />
        </div>
      </section>

      <CTABand
        title="Ready to Start Your Project?"
        description="Let's build something amazing together"
        primaryCTA={{ text: "Get a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "/about" }}
      />
    </div>
  );
}
