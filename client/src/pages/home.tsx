import { Link } from "wouter";
import { ArrowRight, ChevronDown, Film, Camera } from "lucide-react";
import { showreel } from "@/lib/showreel";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ContactForm } from "@/components/contact-form";
import { CloudinaryVideoPlayer } from "@/components/cloudinary-video-player";
import { projects, services, testimonials, clientLogos } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { LeadGenCtaBand } from "@/components/lead-gen-cta-band";
import { PageMeta } from "@/components/page-meta";

function ShowreelSection() {
  return (
    <section className="py-16 lg:py-24 bg-deep-petrol">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-electric-amber/20 text-electric-amber border-electric-amber/30">Showreel</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              See Our Work in Action
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {showreel.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/case-studies">
                <Button data-testid="button-homepage-case-studies">
                  <Film className="w-4 h-4 mr-2" />
                  View Case Studies
                </Button>
              </Link>
              <Link href="/case-studies/showreel">
                <Button variant="outline" className="border-electric-amber/50 text-electric-amber" data-testid="button-homepage-showreel">
                  Watch Full Showreel
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <CloudinaryVideoPlayer
            videoUrl={showreel.featuredVideoUrl}
            posterUrl={showreel.featuredVideoPoster}
            title={showreel.title}
            testId="homepage-showreel"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  const featuredTestimonials = testimonials.filter((t) => t.featured);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <PageMeta
        title="Flashbuzz | Brand films for businesses whose previous suppliers missed the point"
        description="Flashbuzz makes brand films for UK businesses whose previous suppliers couldn't see what made them different. 27-time international award-winning documentary filmmaker."
        canonical="https://flashbuzz.tv/"
      />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 dark:from-background dark:via-background/95 dark:to-background/90" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/drl0fxrkq/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1759077974/Silhouette_Of_People_Working_In_Film_Set_original_1662964_bxcgmu.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-foreground leading-tight mb-6" data-testid="text-hero-title">
            The brand films you knew your business deserved.
          </h1>

          <p className="text-lg md:text-xl text-white/80 dark:text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-hero-subtitle">
            For founders and marketing directors who've sat through too many cuts that missed the point.
          </p>

          <p className="italic text-sm md:text-base text-white/70 dark:text-muted-foreground max-w-3xl mx-auto mb-10" data-testid="text-hero-proof">
            27 international award wins. Documentary filmmaker behind <em>Time Spent</em> (IMDb 8.8). Former Film and Television Academy tutor. Brand films for UK businesses since 2014.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="plausible-event-name=Quote+CTA"
              data-testid="cta-quote-hero"
            >
              <Button size="lg" className="text-base px-8 py-6" data-testid="button-hero-quote">
                Get a quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link
              href="/workshop"
              className="plausible-event-name=Workshop+CTA"
              data-testid="cta-workshop-hero"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 dark:bg-transparent dark:border-border dark:text-foreground"
                data-testid="button-hero-workshop"
              >
                Join the workshop
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link
              href="/work"
              className="text-sm text-white/80 dark:text-muted-foreground hover:text-white dark:hover:text-foreground underline underline-offset-4 transition-colors"
              data-testid="cta-work-hero"
            >
              See the work
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60 dark:text-muted-foreground">
            We reply within 24 hours.
          </p>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll to content"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      <section className="py-12 lg:py-16 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-10">
            Trusted by leading organisations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-full max-w-[180px] h-20 px-5 py-4 rounded-lg bg-white flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300"
                title={logo.name}
                data-testid={`logo-${logo.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img 
                  src={logo.logo} 
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShowreelSection />

      <LeadGenCtaBand variant="minimal" />

      <section className="py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4" data-testid="text-featured-work-title">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Documentary-style films that reveal authentic stories and drive real results.
              </p>
            </div>
            <Link href="/work">
              <Button variant="outline" data-testid="button-view-all-work">
                View All Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-card border-y border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6" data-testid="text-difference-title">
                Most business video isn't film. That's the problem.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A video can look great. Crisp, well-lit, professionally edited, scored with the right kind of music. And then your customers watch it once and forget it within a week.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A film does something different. It cuts deeper. It connects. It stays in the room after the lights come up. The difference isn't budget or equipment. It's a set of choices most suppliers don't know they're failing to make, because nobody ever taught them what makes an audience actually feel something.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've spent the last decade learning what those choices are, first in award-winning documentary work, then teaching at the Film and Television Academy, and now writing a book about it. When you commission a brand film with me, you're not just paying for production. You're paying for the part of the craft that explains why some work resonates and some doesn't, and you're getting walked through it at every stage.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://res.cloudinary.com/drl0fxrkq/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v1759077975/Camera_Lens_original_779692_dp4vee.jpg"
                  alt="Professional cinema camera lens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8" data-testid="text-discovery-title">
            Start with a Discovery
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              If you've been let down before, you don't need another sales call. You need to see how this filmmaker would approach your business before you commit a brand film budget.
            </p>
            <p>
              A Discovery is a 90-minute diagnostic call where I run the framework on your business, followed by a written treatment. The treatment is, in my experience, the most valuable part of the engagement. It covers what the film should communicate, what to deliberately leave out, and what not to show your audience. It draws out what your business actually needs to say, and connects that with what your audience genuinely wants to hear. And it's a document you can take into your next leadership meeting to get senior buy-in for the project, before any production budget is committed.
            </p>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-6 lg:p-8 mb-8">
            <p className="text-xl lg:text-2xl font-semibold text-foreground" data-testid="text-discovery-price">
              £2,500. Two weeks from booking. The fee comes off the cost of any Signature engagement booked within 60 days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact?type=discovery"
              className="plausible-event-name=Discovery+CTA"
              data-testid="cta-discovery"
            >
              <Button size="lg" className="text-base px-8 py-6" data-testid="button-discovery">
                Book a Discovery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link
              href="/about#treatment"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
              data-testid="cta-treatment"
            >
              What's in a treatment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4" data-testid="text-services-title">
              What we create
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Documentary-style video production tailored to your goals, from brand films to recruitment content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {featuredTestimonials.length > 0 && (
        <section className="py-16 lg:py-32 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <TestimonialCard testimonial={featuredTestimonials[0]} variant="featured" />
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24 bg-deep-petrol border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-6 h-6 text-electric-amber" />
                <span className="text-sm font-medium text-electric-amber uppercase tracking-wide">Photography</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Stills from the Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every frame tells a story. Browse our photography portfolio featuring portraits, lifestyle, events, and documentary work captured with the same cinematic eye we bring to video.
              </p>
              <Link href="/photography">
                <Button variant="outline" className="border-electric-amber/50 text-electric-amber" data-testid="button-photography-callout">
                  View Photography
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img src="https://res.cloudinary.com/drl0fxrkq/image/upload/q_auto,f_auto,w_300,h_300,c_fill/Alastair_a8sq8b" alt="Portrait" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img src="https://res.cloudinary.com/drl0fxrkq/image/upload/q_auto,f_auto,w_300,h_300,c_fill/P1002613_cxc4xr" alt="Event" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img src="https://res.cloudinary.com/drl0fxrkq/image/upload/q_auto,f_auto,w_300,h_300,c_fill/Maddie_and_Ollie_mp4_00_01_50_29_Still003_2c91a2343d_ytruiu" alt="Lifestyle" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-32" id="contact">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4" data-testid="text-cta-title">
              Ready to start your next project?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Every great film starts with a conversation. Tell us about your project and we'll get back to you within 24 hours.
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
