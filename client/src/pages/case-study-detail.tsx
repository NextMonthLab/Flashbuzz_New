import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Play, CheckCircle, MapPin, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CloudinaryVideoPlayer } from "@/components/cloudinary-video-player";
import { getCaseStudyBySlug, caseStudies } from "@/lib/case-studies";
import { InlineCta } from "@/components/lead-gen-ctas";
import { LeadGenCtaBand } from "@/components/lead-gen-cta-band";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudyBySlug(slug || "");

  if (!study) {
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

  const otherStudies = caseStudies.filter(cs => cs.id !== study.id).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <section className="py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/case-studies">
            <Button variant="ghost" className="mb-6" data-testid="button-back-to-case-studies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{study.category}</Badge>
            {study.hero && <Badge className="bg-primary/20 text-primary border-primary/30">Featured</Badge>}
            {study.isShowreel && <Badge className="bg-electric-amber/20 text-electric-amber border-electric-amber/30">Showreel</Badge>}
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4" data-testid="text-case-study-title">
            {study.title}
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl">
            {study.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            {study.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{study.location}</span>
              </div>
            )}
            {study.year && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{study.year}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <CloudinaryVideoPlayer
            videoUrl={study.featuredVideoUrl}
            posterUrl={study.featuredVideoPoster}
            title={study.title}
            testId={`case-study-${study.slug}-main`}
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">The Brief</h2>
              <p className="text-muted-foreground leading-relaxed">{study.theBrief}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Approach</h2>
              <ul className="space-y-3">
                {study.approach.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">The Outcome</h2>
              <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
            </div>
          </div>

          <InlineCta className="mt-12" />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <Badge key={service} variant="outline">{service}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {study.supportingVideos && study.supportingVideos.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Supporting Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {study.supportingVideos.map((video, index) => (
                <CloudinaryVideoPlayer
                  key={index}
                  videoUrl={video.url}
                  posterUrl={video.poster}
                  title={video.title}
                  testId={`case-study-${study.slug}-video-${index}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <LeadGenCtaBand
        variant="gradient"
        headline="Ready to plan your next video project?"
        description="Take our free scorecard and get a tailored 90-day plan in minutes."
      />

      {otherStudies.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">More Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherStudies.map((otherStudy) => (
                <Link key={otherStudy.id} href={`/case-studies/${otherStudy.slug}`}>
                  <div className="group cursor-pointer" data-testid={`card-related-${otherStudy.slug}`}>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                      <img
                        src={otherStudy.featuredVideoPoster}
                        alt={otherStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {otherStudy.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{otherStudy.category.split(" / ")[0]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
