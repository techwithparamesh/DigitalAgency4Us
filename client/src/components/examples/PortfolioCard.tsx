import PortfolioCard from '../PortfolioCard';

export default function PortfolioCardExample() {
  return (
    <div className="p-8 max-w-md">
      <PortfolioCard
        title="Example Project"
        description="A modern website with clean design"
        url="https://example.com"
        tags={["Custom Code", "Responsive"]}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      />
    </div>
  );
}
