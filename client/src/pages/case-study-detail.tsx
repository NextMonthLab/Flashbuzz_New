import { Link, useParams } from "wouter";
import { ArrowLeft, CheckCircle, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CloudinaryVideoPlayer } from "@/components/cloudinary-video-player";
import { VideoPlayer } from "@/components/video-player";
import { getProjectBySlug, getCaseStudyProjects } from "@/lib/data";
import { showreel } from "@/lib/showreel";
import { InlineCta } from "@/components/lead-gen-ctas";
import { LeadGenCtaBand } from "@/components/lead-gen-cta-band";
import { PageMeta } from "@/components/page-meta";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (slug === "showreel") {
    return (
      <div className="min-h-screen pt-24 lg:pt-32">
        <PageMeta
          title="Flashbuzz Showreel | Case Studies"
          description={showreel.summary.slice(0, 158)}
          canonical="https://flashbuzz.tv/case-studies/showreel"
        />
        <section className="py-8 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/case-studies">
              <Button variant="ghost" className="mb-6" data-testid="button-back-to-case-studies">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-electric-amber/20 text-electric-amber border-electric-amber/30">Showreel</Badge>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4" data-testid="text-case-study-title">
              {showreel.title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl">
              {showreel.summary}
            </p>
          </div>
        </section>
        <section className="pb-12 lg:pb-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <CloudinaryVideoPlayer
              videoUrl={showreel.featuredVideoUrl}
              posterUrl={showreel.featuredVideoPoster}
              title={showreel.title}
              testId="case-study-showreel"
            />
          </div>
        </section>
        <LeadGenCtaBand
          variant="gradient"
          headline="Ready to plan your next video project?"
        />
      </div>
    );
  }

  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherStudies = getCaseStudyProjects()
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const briefText = project.theBrief || project.challenge;
  const approachItems = project.approachBullets || [project.approach];
  const hasCloudinary = Boolean(project.cloudinaryVideoUrl && project.cloudinaryPosterUrl);
  const hasVimeo = Boolean(project.vimeoId);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title={`${project.title} | Flashbuzz Case Study`}
        description={(project.theBrief || project.description).slice(0, 158)}
        canonical={`https://flashbuzz.tv/case-studies/${project.slug}`}
      />
      <section className="py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/case-studies">
            <Button variant="ghost" className="mb-6" data-testid="button-back-to-case-studies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{project.sector}</Badge>
            {project.hero && <Badge className="bg-primary/20 text-primary border-primary/30">Featured</Badge>}
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4" data-testid="text-case-study-title">
            {project.title}
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl">
            {project.description}
          </p>

          {project.year && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {(hasCloudinary || hasVimeo) && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {hasCloudinary ? (
              <CloudinaryVideoPlayer
                videoUrl={project.cloudinaryVideoUrl!}
                posterUrl={project.cloudinaryPosterUrl!}
                title={project.title}
                testId={`case-study-${project.slug}-main`}
              />
            ) : (
              <VideoPlayer
                vimeoId={project.vimeoId!}
                thumbnailUrl={project.thumbnailUrl || undefined}
                title={project.title}
              />
            )}
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">The Brief</h2>
              <p className="text-muted-foreground leading-relaxed">{briefText}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Approach</h2>
              <ul className="space-y-3">
                {approachItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">The Outcome</h2>
              <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          <InlineCta className="mt-12" />
        </div>
      </section>

      {project.tags && project.tags.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      <LeadGenCtaBand
        variant="gradient"
        headline="Ready to plan your next video project?"
      />

      {otherStudies.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">More Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherStudies.map((other) => {
                const otherPoster = other.cloudinaryPosterUrl || other.thumbnailUrl || "";
                return (
                  <Link key={other.id} href={`/case-studies/${other.slug}`}>
                    <div className="group cursor-pointer" data-testid={`card-related-${other.slug}`}>
                      <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                        <img
                          src={otherPoster}
                          alt={other.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{other.sector}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
