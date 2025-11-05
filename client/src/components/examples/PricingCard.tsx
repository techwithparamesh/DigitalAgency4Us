import PricingCard from '../PricingCard';

export default function PricingCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PricingCard
        name="Business"
        price="$5,500"
        description="Ideal for growing businesses"
        features={[
          "Up to 15 pages",
          "Full SEO optimization",
          "3 months support"
        ]}
        highlighted={true}
      />
    </div>
  );
}
