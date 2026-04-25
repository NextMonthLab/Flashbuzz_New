import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle, Film, Users, BookOpen, Mic, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { services, projects } from "@/lib/data";
import heroBackground from "@assets/flashbuzz-photo-1.jpg";
import { LeadGenCtaBand } from "@/components/lead-gen-cta-band";
import { PageMeta } from "@/components/page-meta";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Film,
  Users,
  BookOpen,
  Mic,
  Zap,
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Film;
  const relatedProjects = projects.filter((p) => 
    p.serviceType.toLowerCase().includes(service.title.toLowerCase().split(" ")[0]) ||
    service.title.toLowerCase().includes(p.serviceType.toLowerCase().split(" ")[0])
  ).slice(0, 3);

  const deliverables = service.deliverables.split(",").map((d) => d.trim());

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title={`${service.title} | Flashbuzz`}
        description={service.shortDescription.slice(0, 158)}
        canonical={`https://flashbuzz.tv/services/${service.slug}`}
      />
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-testid="service-breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-lg bg-flash-pink/20 flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-flash-pink" />
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-service-title">
              {service.title}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Who This Is For</h2>
              <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-service-who">
                {service.whoIsFor}
              </p>

              <h2 className="text-xl font-semibold text-foreground mb-4">The Problem We Solve</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-service-problem">
                {service.problemSolved}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Why Filmmaker-Led Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-service-why">
                {service.whyFilmmakerLed}
              </p>

              <h2 className="text-xl font-semibold text-foreground mb-4">What Makes Flashbuzz Different</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-service-different">
                {service.whatMakesDifferent}
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadGenCtaBand variant="minimal" />

      <section className="py-12 lg:py-16 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">What You Get</h2>
              <ul className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-8">
              <p className="text-sm text-muted-foreground mb-2">Typical projects start from</p>
              <p className="text-4xl font-bold text-foreground mb-4">{service.priceFrom}</p>
              <p className="text-sm text-muted-foreground mb-6">
                Every project is unique. We'll provide a tailored quote based on your specific needs.
              </p>
              <Link href="/contact">
                <Button className="w-full" data-testid="button-service-contact">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to discuss your {service.title.toLowerCase()}?
            </h2>
            <p className="text-muted-foreground">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-6 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
