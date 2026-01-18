import { Link } from "wouter";
import { ArrowRight, ChevronDown, Play, Award, Users, Film, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ContactForm } from "@/components/contact-form";
import { projects, services, testimonials, clientLogos } from "@/lib/data";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 dark:from-background dark:via-background/95 dark:to-background/90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground dark:text-primary text-sm font-medium border border-primary/30">
              <Award className="w-4 h-4" />
              23 International Awards
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-foreground leading-tight mb-6" data-testid="text-hero-title">
            Documentary craft for business stories that matter.
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 dark:text-muted-foreground max-w-2xl mx-auto mb-10" data-testid="text-hero-subtitle">
            Video production powered by an award-winning filmmaker. We make films that change how people feel about your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/work">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 dark:bg-transparent dark:border-border dark:text-foreground"
                data-testid="button-hero-view-work"
              >
                <Play className="w-4 h-4 mr-2" />
                View Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" data-testid="button-hero-contact">
                Let's Talk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
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

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-wide mb-8">
            Trusted by leading organisations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-16 h-16 rounded-lg bg-card border border-card-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors cursor-default"
                title={logo.name}
                data-testid={`logo-${logo.initials.toLowerCase()}`}
              >
                <span className="text-lg font-bold">{logo.initials}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                What makes Flashbuzz different
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We bring a filmmaker's discipline—story architecture, authentic interview technique, and cinematic execution—to organisations where generic corporate video fails.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                This is video production powered by an award-winning filmmaker with 23 international awards and a 9.2 IMDb rating for "Time Spent". Before we ever press record, we understand who you are and why your story matters.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <Film className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Story Architecture</h3>
                  <p className="text-sm text-muted-foreground">Narrative structure that engages, not just informs.</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Authentic Interviews</h3>
                  <p className="text-sm text-muted-foreground">Documentary techniques that draw out genuine stories.</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Documentary Depth</h3>
                  <p className="text-sm text-muted-foreground">Going beyond surface to reveal what makes you different.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1598387993211-5a5b66c41f74?w=800&h=600&fit=crop"
                  alt="Behind the scenes - filmmaker at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-card-border rounded-lg p-6 shadow-lg max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">23</div>
                  <div className="text-sm text-muted-foreground">International awards for documentary filmmaking</div>
                </div>
              </div>
            </div>
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
