import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string;
}

export default function TestimonialCard({ name, company, role, quote, image }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="h-full" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-4 border-2 border-primary/20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
          <p className="text-lg mb-6 italic text-foreground">&ldquo;{quote}&rdquo;</p>
          <div>
            <p className="font-semibold text-foreground" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</p>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
