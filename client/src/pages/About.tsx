import { Search, Palette, Code, Rocket, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTABand from "@/components/CTABand";

export default function About() {
  const process = [
    {
      icon: Search,
      title: "Discover",
      description: "We start by understanding your business, goals, and target audience. Discovery calls and requirements gathering ensure we're aligned from day one.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Our design phase focuses on user experience and brand consistency. We create wireframes and prototypes for your approval before development begins.",
    },
    {
      icon: Code,
      title: "Build",
      description: "Whether WordPress or custom code, we build with quality and performance in mind. Regular updates keep you informed throughout development.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Thorough testing, SEO setup, and performance optimization ensure a smooth launch. We handle all technical details including DNS, SSL, and hosting setup.",
    },
    {
      icon: Wrench,
      title: "Maintain",
      description: "Post-launch support, bug fixes, and optional ongoing maintenance. For custom-code projects, we maintain your private Git repository with full transparency.",
    },
  ];

  const values = [
    {
      title: "Quality Over Quantity",
      description: "We're a small team that focuses on delivering exceptional work rather than churning out projects. Each website receives our full attention and expertise.",
    },
    {
      title: "Code Ownership",
      description: "You own everything we build. For custom-code projects, you get full access to your private Git repository with complete documentation and transparent handover.",
    },
    {
      title: "Repository Maintenance",
      description: "Custom-code projects aren't just delivered and forgotten. We maintain your Git repository, track versions, and ensure your codebase stays clean and documented.",
    },
    {
      title: "Transparent Process",
      description: "No surprises. We provide clear timelines, regular updates, and honest communication throughout the entire project lifecycle.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigitalAgency4Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a web development agency that believes in building long-term partnerships through quality work and transparent communication.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                <p className="text-muted-foreground mb-4">
                  We build complete systems: frontend, backend, and databases. Whether you need a WordPress site for quick deployment or a fully custom-coded application with Git repository maintenance, we deliver professional solutions tailored to your needs.
                </p>
                <p className="text-muted-foreground mb-4">
                  Every project we ship is responsive, fast, and SEO-ready. We don't just build websites—we create digital experiences that help your business grow.
                </p>
                <p className="text-muted-foreground">
                  For businesses that want to focus on their core operations, we offer annual hosting and database maintenance as an add-on, handling all technical infrastructure so you don't have to.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              <div className="space-y-12">
                {process.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-testid={`process-step-${index}`}
                  >
                    <div className="flex-1" />
                    <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <Card className="flex-1 hover-elevate transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Let's Build Something Great Together"
        description="Quality websites that grow with your business"
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Work", href: "/portfolio" }}
      />
    </div>
  );
}
