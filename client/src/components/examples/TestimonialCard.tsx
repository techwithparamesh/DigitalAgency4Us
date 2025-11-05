import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-lg">
      <TestimonialCard
        name="John Doe"
        company="Example Corp"
        role="CEO"
        quote="Amazing work! Highly recommend their services."
        image="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
      />
    </div>
  );
}
