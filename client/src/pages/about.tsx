import { Link } from "wouter";
import { ArrowRight, Award, Film, Users, Clock, CheckCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import behindTheScenes from "@assets/flashbuzz-photo-1.jpg";
import founderPhoto from "@assets/flashbuzz-photo-2.jpg";
import { PageMeta } from "@/components/PageMeta";

const stats = [
  { label: "International Awards", value: "23" },
  { label: "IMDb Rating", value: "9.2" },
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "200+" },
];

const values = [
  {
    title: "Depth Over Volume",
    description: "We take on fewer projects to give each one the attention it deserves. Every film benefits from the full depth of our documentary expertise.",
  },
  {
    title: "Trust Before Cameras",
    description: "Authenticity requires trust. We invest time in understanding your organisation before we ever press record.",
  },
  {
    title: "Story-First, Always",
    description: "Technique serves story, never the other way around. We find the narrative that makes your content compelling.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="About | Flashbuzz"
        description="Flashbuzz is led by award-winning filmmaker Rob Hutt, bringing 23 international awards and 15+ years of documentary craft to business storytelling from Banbury."
        canonical="https://flashbuzz.tv/about"
      />
      <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-about-title">
                About Flashbuzz
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Documentary craft brought to business storytelling. Video production powered by an award-winning filmmaker.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src={behindTheScenes}
                  alt="Flashbuzz team filming on location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                The Filmmaker's Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Flashbuzz began with a simple observation: most corporate video fails because it treats businesses like products to be advertised, not stories to be told.
                </p>
                <p>
                  After years of documentary filmmaking—including "Time Spent," which won 23 international awards and achieved a 9.2 IMDb rating—I realised that the same techniques that made documentaries compelling could transform how businesses communicate.
                </p>
                <p>
                  Documentary craft isn't just about cameras and editing. It's about understanding people, finding authentic moments, and structuring narratives that resonate. That's what we bring to every project.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                The Flashbuzz Philosophy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Generic corporate video is polished but forgettable. It tells people what you do but never shows who you are. We believe in going deeper.
                </p>
                <p>
                  Our documentary approach means real interviews with real people, authentic moments captured naturally, and stories structured with the same craft we'd bring to a feature film.
                </p>
                <p>
                  The result? Content that resonates because it's true. Films that make audiences feel something, not just understand something.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Pre-Production</h3>
              <p className="text-sm text-muted-foreground">Deep discovery and story development before cameras roll.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Documentary Interviews</h3>
              <p className="text-sm text-muted-foreground">Creating conditions for authentic, unscripted moments.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Film className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cinematic Execution</h3>
              <p className="text-sm text-muted-foreground">Professional production with filmmaker's attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Character-Driven Editing</h3>
              <p className="text-sm text-muted-foreground">Post-production that serves the story, every frame intentional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card border border-card-border rounded-lg p-6 lg:p-8" data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                The Team
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work with a network of talented filmmakers and crew across the UK. Each project brings together the right specialists for the job, from cinematographers to sound designers to editors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This collaborative model means you always get the right expertise for your specific project, not just whoever happens to be available.
              </p>
              <div className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-lg">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Our expertise in narrative intelligence has been lent to CharacterX, a business transformation platform.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src={founderPhoto}
                  alt="Flashbuzz founder in the studio"
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
            <div className="bg-card border border-card-border rounded-lg p-6 lg:p-8 cursor-pointer" data-testid="about-photography-callout">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-amber/10 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-electric-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">We also shoot stills</h3>
                    <p className="text-sm text-muted-foreground">Browse our photography portfolio featuring portraits, events, and documentary work.</p>
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
            Let's work together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Every great film starts with a conversation. Tell us about your project and discover what documentary craft can do for your story.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-about-cta">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
