import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "@/components/video-player";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { projects } from "@/lib/data";

export default function Project() {
  const params = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/work">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const projectIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[projectIndex + 1] || projects[0];

  const initials = project.testimonialAuthor
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <section className="py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-testid="project-breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/work" className="hover:text-foreground transition-colors">
              Work
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{project.sector}</Badge>
            <Badge variant="outline">{project.serviceType}</Badge>
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4" data-testid="text-project-title">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Client: <span className="text-foreground font-medium">{project.client}</span>
          </p>
        </div>
      </section>

      {project.vimeoId && (
        <section className="mb-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <VideoPlayer
              vimeoId={project.vimeoId}
              thumbnailUrl={project.thumbnailUrl || undefined}
              title={project.title}
            />
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-project-challenge">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-project-approach">
                {project.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">The Outcome</h2>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-project-outcome">
              {project.outcome}
            </p>
          </div>
        </div>
      </section>

      {project.testimonial && project.testimonialAuthor && (
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <blockquote className="text-2xl lg:text-3xl font-serif leading-relaxed text-foreground mb-8 pl-6 border-l-4 border-primary" data-testid="text-project-testimonial">
              "{project.testimonial}"
            </blockquote>
            <div className="flex items-center gap-4 pl-6">
              <Avatar className="w-14 h-14">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{project.testimonialAuthor}</p>
                <p className="text-sm text-muted-foreground">
                  {project.testimonialRole}, {project.client}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Next Project</p>
              <h3 className="text-xl font-semibold text-foreground">{nextProject.title}</h3>
              <p className="text-muted-foreground">{nextProject.client}</p>
            </div>
            <Link href={`/work/${nextProject.slug}`}>
              <Button data-testid="button-next-project">
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Need something similar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring the same documentary approach to your project.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-project-cta">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
