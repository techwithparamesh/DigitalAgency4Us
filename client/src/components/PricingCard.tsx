import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({ name, price, description, features, highlighted }: PricingCardProps) {
  return (
    <Card
      className={`relative ${highlighted ? "border-primary shadow-lg scale-105" : ""} hover-elevate transition-all duration-300`}
      data-testid={`card-pricing-${name.toLowerCase()}`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="text-2xl mb-2">{name}</CardTitle>
        <div className="mb-2">
          <span className="text-4xl font-bold text-primary">{price}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className="w-full"
          variant={highlighted ? "default" : "outline"}
          data-testid={`button-select-${name.toLowerCase()}`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
