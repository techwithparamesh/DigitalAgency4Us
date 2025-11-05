import CTABand from '../CTABand';

export default function CTABandExample() {
  return (
    <CTABand
      title="Ready to Start Your Project?"
      description="Let's build something amazing together"
      primaryCTA={{ text: "Get Started", href: "/contact" }}
      secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
    />
  );
}
