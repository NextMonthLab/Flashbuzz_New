import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies, showreel, getHeroCaseStudies, getAllCategories, type CaseStudy } from "@/lib/case-studies";

function VideoPlayer({ videoUrl, posterUrl, title }: { videoUrl: string; posterUrl: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <video
        src={videoUrl}
        poster={posterUrl}
        controls
        autoPlay
        className="w-full h-full object-contain bg-black"
        data-testid="video-player"
      />
    );
  }

  return (
    <div 
      className="relative w-full h-full cursor-pointer group"
      onClick={() => setIsPlaying(true)}
      data-testid="video-thumbnail"
    >
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
          <Play className="w-8 h-8 text-primary-foreground ml-1" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-white ml-1" />
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`}>
      <Card className="h-full overflow-hidden hover-elevate cursor-pointer" data-testid={`card-case-study-${study.slug}`}>
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={study.featuredVideoPoster}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">{study.category.split(" / ")[0]}</Badge>
            {study.hero && <Badge className="text-xs bg-primary/20 text-primary border-primary/30">Featured</Badge>}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{study.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{study.summary}</p>
          <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
            <span>View case study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function CaseStudiesIndex() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const heroStudies = getHeroCaseStudies();
  const categories = getAllCategories();

  const filteredStudies = activeCategory === "all"
    ? caseStudies
    : caseStudies.filter(cs => cs.category.includes(activeCategory));

  const nonHeroStudies = filteredStudies.filter(cs => !cs.hero);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-case-studies-title">
              Case Studies
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Documentary-style films that reveal authentic stories and drive real business results. Each project represents a unique collaboration with clients who trusted us to tell their story.
            </p>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-6 lg:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-electric-amber/20 text-electric-amber border-electric-amber/30">Watch Our Showreel</Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  See Our Work in Action
                </h2>
                <p className="text-muted-foreground mb-6">
                  {showreel.summary}
                </p>
                <Link href="/case-studies/showreel">
                  <Button data-testid="button-view-showreel">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Full Showreel
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <VideoPlayer
                  videoUrl={showreel.featuredVideoUrl}
                  posterUrl={showreel.featuredVideoPoster}
                  title={showreel.title}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {heroStudies.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {heroStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">All Projects</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory("all")}
                data-testid="filter-all"
              >
                All
              </Button>
              {categories.slice(0, 5).map((category) => {
                const shortCategory = category.split(" / ")[0];
                return (
                  <Button
                    key={category}
                    variant={activeCategory === shortCategory ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(shortCategory)}
                    data-testid={`filter-${shortCategory.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {shortCategory}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(activeCategory === "all" ? caseStudies : filteredStudies).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to tell your story?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how documentary craft can create content that resonates with your audience.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-case-studies-cta">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
