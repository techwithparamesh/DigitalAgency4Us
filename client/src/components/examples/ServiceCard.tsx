import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        title="WordPress Sites"
        description="Fast, flexible CMS-powered websites"
        icon="wordpress"
        features={[
          "Custom theme development",
          "Plugin integration",
          "Full CMS training"
        ]}
      />
    </div>
  );
}
