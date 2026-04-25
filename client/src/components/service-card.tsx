import { Link } from "wouter";
import { ArrowRight, Film, Users, BookOpen, Mic, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Film,
  Users,
  BookOpen,
  Mic,
  Zap,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Film;

  return (
    <Link href={`/services/${service.slug}`}>
      <Card 
        className="group h-full hover-elevate cursor-pointer overflow-visible"
        data-testid={`card-service-${service.slug}`}
      >
        <CardContent className="p-6 lg:p-8">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {service.shortDescription}
          </p>
          
          <div className="flex items-center gap-2 text-primary text-sm font-medium">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
