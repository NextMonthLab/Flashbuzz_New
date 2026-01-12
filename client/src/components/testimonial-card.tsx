import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "default" | "featured";
}

export function TestimonialCard({ testimonial, variant = "default" }: TestimonialCardProps) {
  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  if (variant === "featured") {
    return (
      <div 
        className="relative py-12 lg:py-16"
        data-testid={`testimonial-featured-${testimonial.id}`}
      >
        <Quote className="absolute top-0 left-0 w-12 h-12 text-primary/20" />
        <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-serif leading-relaxed text-foreground mb-8 pl-6 border-l-4 border-primary">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center gap-4 pl-6">
          <Avatar className="w-14 h-14">
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-card border border-card-border rounded-lg p-6 lg:p-8"
      data-testid={`testimonial-${testimonial.id}`}
    >
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <blockquote className="text-lg leading-relaxed text-foreground mb-6">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
