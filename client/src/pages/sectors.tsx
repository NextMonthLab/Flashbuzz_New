import { Link } from "wouter";
import { ArrowRight, Users, Banknote, Factory, Flag, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sectors } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "recruitment-employer-branding": Users,
  "financial-services": Banknote,
  "manufacturing-health-safety": Factory,
  "motorsport": Flag,
  "scientific-tech": Microscope,
};

export default function Sectors() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-sectors-title">
              Sectors We Serve
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We bring deep sector knowledge to every project. Understanding your industry's unique challenges and language means content that resonates with your specific audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sectors.map((sector) => {
              const IconComponent = iconMap[sector.slug] || Users;
              return (
                <Link key={sector.id} href={`/sectors/${sector.slug}`}>
                  <Card 
                    className="h-full hover-elevate cursor-pointer overflow-visible"
                    data-testid={`card-sector-${sector.slug}`}
                  >
                    <CardContent className="p-6 lg:p-8">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {sector.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {sector.shortDescription}
                      </p>
                      
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Don't see your sector?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Documentary approach works across industries. Let's discuss how we can bring the same depth and authenticity to your sector.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-sectors-cta">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
