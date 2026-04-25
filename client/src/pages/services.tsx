import { Link } from "wouter";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";
import heroBackground from "@assets/flashbuzz-photo-1.jpg";
import { PageMeta } from "@/components/page-meta";

export default function Services() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Services | Flashbuzz"
        description="Documentary-style video production services: brand films, recruitment video, founder stories, case studies, and event capture. Filmmaker-led craft for organisations that need real stories."
        canonical="https://flashbuzz.tv/services"
      />
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-services-title">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Documentary-style video production tailored to your goals. We bring a filmmaker's discipline to every project, creating content that resonates because it's authentic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                The Flashbuzz Approach
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Discovery</h3>
                  <p>We start with deep understanding. Before cameras roll, we learn who you are, what makes you different, and why your story matters.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Story Development</h3>
                  <p>We find the narrative buried in the brief. We identify the characters, tensions, and resolutions that will engage your audience.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Production</h3>
                  <p>Filmmaker-led shoots with documentary interview techniques. We create conditions for authenticity, not rehearsed performances.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Post-Production</h3>
                  <p>Character-driven editing that serves the story. Every frame, every cut, every moment is intentional.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://res.cloudinary.com/drl0fxrkq/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v1744814522/Meadow-Cafe-Filming-0023_aa36qq.jpg"
                  alt="Behind the scenes at a Flashbuzz documentary shoot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/photography">
            <div className="bg-card border border-card-border rounded-lg p-6 lg:p-8 hover-elevate cursor-pointer" data-testid="services-photography-callout">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-amber/10 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-electric-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Looking for photography?</h3>
                    <p className="text-sm text-muted-foreground">We also offer professional photography services with the same cinematic approach.</p>
                  </div>
                </div>
                <div className="md:ml-auto">
                  <Button variant="outline" className="border-electric-amber/50 text-electric-amber">
                    View Gallery
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Every project is unique. Let's discuss your goals and we'll recommend the right approach for your needs.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-services-cta">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
