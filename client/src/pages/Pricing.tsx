import { useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PricingCard from "@/components/PricingCard";
import CTABand from "@/components/CTABand";
import pricingData from "@/data/pricing.json";

export default function Pricing() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that fits your needs. All prices are one-time build costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingData.packages.map((pkg) => (
              <PricingCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <Card className="mb-20 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center pb-6">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Add-On Service
              </div>
              <CardTitle className="text-3xl">{pricingData.addon.name}</CardTitle>
              <div className="text-4xl font-bold text-primary my-2">{pricingData.addon.price}</div>
              <CardDescription className="text-base">{pricingData.addon.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingData.addon.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" data-testid="table-comparison">
                <thead>
                  <tr className="border-b-2 border-border">
                    {pricingData.comparison.headers.map((header, index) => (
                      <th
                        key={index}
                        className={`p-4 text-left font-semibold ${index === 0 ? "w-1/3" : ""}`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingData.comparison.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={rowIndex % 2 === 0 ? "bg-muted/30" : ""}
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 text-sm">
                          {cell === "✓" ? (
                            <Check className="w-5 h-5 text-primary" />
                          ) : cell === "—" ? (
                            <X className="w-5 h-5 text-muted-foreground/30" />
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {pricingData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger data-testid={`accordion-faq-${index}`}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABand
        title="Not Sure Which Package Is Right?"
        description="Let's chat about your project and find the perfect fit"
        primaryCTA={{ text: "Get Custom Quote", href: "/contact" }}
        secondaryCTA={{ text: "View Services", href: "/services" }}
      />
    </div>
  );
}
