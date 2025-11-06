import { Code, Database, GitBranch } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiWordpress } from "react-icons/si";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import servicesData from "@/data/services.json";

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build complete systems: frontend, backend, and databases. Custom-code projects are maintained in private Git repositories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <Card className="hover-elevate transition-all duration-300" data-testid="card-wordpress-track">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <SiWordpress className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">WordPress Sites</CardTitle>
                <CardDescription className="text-base">
                  Fast delivery with powerful CMS flexibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Perfect for businesses that need quick deployment and easy content management. WordPress powers over 40% of the web for good reason.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <div>
                      <strong>Custom Themes & Plugins</strong>
                      <p className="text-sm text-muted-foreground">Tailored to your brand and requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <div>
                      <strong>CMS Training Included</strong>
                      <p className="text-sm text-muted-foreground">Full handover with documentation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <div>
                      <strong>Fast Delivery</strong>
                      <p className="text-sm text-muted-foreground">Typical projects complete in 2-4 weeks</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 border-primary/50" data-testid="card-custom-track">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Custom-Code Sites</CardTitle>
                <CardDescription className="text-base">
                  Full-stack development with complete control
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For businesses that need maximum flexibility, performance, and unique functionality. Built from the ground up with modern technologies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <div>
                      <strong>Hand-Coded HTML/CSS/JavaScript</strong>
                      <p className="text-sm text-muted-foreground">React, TypeScript, or vanilla JavaScript</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <div>
                      <strong>Backend & Database Integration</strong>
                      <p className="text-sm text-muted-foreground">Node.js, Express, Drizzle ORM, MySQL, PostgreSQL</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <div className="flex items-center gap-2">
                      <strong>Private Git Repository</strong>
                      <GitBranch className="w-4 h-4 text-primary" />
                      <p className="text-sm text-muted-foreground">Full version control & maintenance</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesData.slice(2).map((service) => (
                <ServiceCard key={service.id} {...service} icon={service.icon as any} />
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Annual Hosting & Database Maintenance</h3>
                  <p className="text-muted-foreground mb-4">
                    Let us handle all the technical operations. Our annual add-on includes cloud hosting, SSL certificates, daily backups, security monitoring, database maintenance, and priority support.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available as an add-on to any package. Perfect for businesses that want to focus on their core operations while we handle the technical infrastructure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-3xl mx-auto my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger>Do I own the code?</AccordionTrigger>
            <AccordionContent>
              Yes! For both WordPress and custom-code projects, you own all the source code and content. We provide full transparency and handover documentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>What's included in the Annual Add-On?</AccordionTrigger>
            <AccordionContent>
              The Annual Hosting & Maintenance package includes cloud hosting, SSL certificates, daily backups, security monitoring, database maintenance, minor content updates, and priority support. Perfect if you want us to handle all technical operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Can I migrate my existing site?</AccordionTrigger>
            <AccordionContent>
              Absolutely! We can migrate your existing WordPress or custom site to our platform, optimize it, and handle all hosting and maintenance going forward.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>How long does a project take?</AccordionTrigger>
            <AccordionContent>
              We will complete the website in 2-4 weeks. For larger or more complex projects, we will provide a detailed timeline during discovery.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <CTABand
        title="Let's Discuss Your Project"
        description="Every project starts with a conversation"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "View Services", href: "/services" }}
      />
    </div>
  );
}
