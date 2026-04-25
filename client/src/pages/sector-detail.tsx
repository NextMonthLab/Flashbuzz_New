import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Users, Banknote, Factory, Flag, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { sectors, projects, services } from "@/lib/data";
import heroBackground from "@assets/flashbuzz-photo-2.jpg";
import { PageMeta } from "@/components/PageMeta";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "recruitment-employer-branding": Users,
  "financial-services": Banknote,
  "manufacturing-health-safety": Factory,
  "motorsport": Flag,
  "scientific-tech": Microscope,
};

export default function SectorDetail() {
  const params = useParams<{ slug: string }>();
  const sector = sectors.find((s) => s.slug === params.slug);

  if (!sector) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Sector Not Found</h1>
          <Link href="/sectors">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sectors
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[sector.slug] || Users;
  const sectorProjects = projects.filter((p) => 
    p.sector.toLowerCase().includes(sector.title.toLowerCase().split(" ")[0]) ||
    sector.title.toLowerCase().includes(p.sector.toLowerCase().split("&")[0].trim())
  ).slice(0, 3);

  const initials = sector.testimonialAuthor
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const metaDescription = sector.description.slice(0, 158);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title={`${sector.title} | Flashbuzz`}
        description={metaDescription}
        canonical={`https://flashbuzz.tv/sectors/${sector.slug}`}
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
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-testid="sector-breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/sectors" className="hover:text-foreground transition-colors">
              Sectors
            </Link>
            <span>/</span>
            <span className="text-foreground">{sector.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-lg bg-flash-pink/20 flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-flash-pink" />
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-sector-title">
              {sector.title}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              {sector.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Understanding Your Industry</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-sector-knowledge">
                {sector.industryKnowledge}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Why Documentary Approach Works Here</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-sector-documentary">
                {sector.whyDocumentaryWorks}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Our Experience</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-sector-experience">
            {sector.experience}
          </p>
        </div>
      </section>

      {sector.testimonial && sector.testimonialAuthor && (
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <blockquote className="text-2xl lg:text-3xl font-serif leading-relaxed text-foreground mb-8 pl-6 border-l-4 border-primary" data-testid="text-sector-testimonial">
              "{sector.testimonial}"
            </blockquote>
            <div className="flex items-center gap-4 pl-6">
              <Avatar className="w-14 h-14">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{sector.testimonialAuthor}</p>
                <p className="text-sm text-muted-foreground">
                  {sector.testimonialRole}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {sectorProjects.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              {sector.title} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {sectorProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/work">
                <Button variant="outline">
                  View All Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Typical Services for {sector.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Working in {sector.title}? Let's talk.
            </h2>
            <p className="text-muted-foreground">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
