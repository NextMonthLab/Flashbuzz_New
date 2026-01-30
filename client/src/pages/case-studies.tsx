import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CloudinaryVideoPlayer } from "@/components/cloudinary-video-player";
import { caseStudies, showreel, getHeroCaseStudies, getAllCategories, type CaseStudy } from "@/lib/case-studies";
import { LeadGenCtaBand } from "@/components/lead-gen-cta-band";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`}>
      <Card className="h-full overflow-hidden hover-elevate cursor-pointer group" data-testid={`card-case-study-${study.slug}`}>
        <div className="aspect-video overflow-hidden bg-muted relative">
          <img
            src={study.featuredVideoPoster}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-flash-pink/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-white ml-0.5" />
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">{study.category.split(" / ")[0]}</Badge>
            {study.hero && <Badge className="text-xs bg-flash-pink/20 text-flash-pink border-flash-pink/30">Featured</Badge>}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-case-study-title-${study.slug}`}>{study.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{study.summary}</p>
          <div className="flex items-center gap-2 mt-4 text-flash-pink text-sm font-medium group-hover:text-electric-amber transition-colors" data-testid={`cta-case-study-${study.slug}`}>
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
              <CloudinaryVideoPlayer
                videoUrl={showreel.featuredVideoUrl}
                posterUrl={showreel.featuredVideoPoster}
                title={showreel.title}
                testId="showreel-video"
              />
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

      <LeadGenCtaBand
        variant="gradient"
        headline="Want help planning your video content?"
        description="Take our free scorecard and get a tailored 90-day plan in minutes."
      />
    </div>
  );
}
