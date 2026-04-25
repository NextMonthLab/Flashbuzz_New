import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { PageMeta } from "@/components/page-meta";

const filters = [
  { value: "all", label: "All Projects" },
  { value: "Recruitment & Employer Branding", label: "Recruitment" },
  { value: "Financial Services", label: "Financial Services" },
  { value: "Manufacturing & Health Safety", label: "Manufacturing" },
  { value: "Motorsport", label: "Motorsport" },
  { value: "Scientific & Tech", label: "Scientific & Tech" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.sector === activeFilter);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Our Work | Flashbuzz"
        description="Documentary-style films for recruitment, financial services, manufacturing, motorsport, and science. Browse our portfolio of authentic business stories made with filmmaker craft."
        canonical="https://flashbuzz.tv/work"
      />
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-work-title">
                Our Work
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Documentary-style films that reveal authentic stories and drive real business results. Each project represents a unique collaboration with clients who trusted us to tell their story with depth and craft.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://res.cloudinary.com/drl0fxrkq/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v1759077974/Operating_The_TV_Camera_original_1116311_tbid5m.jpg"
                  alt="Professional camera operator at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                data-testid={`filter-${filter.value.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to create something meaningful?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how documentary craft can tell your business story with depth and authenticity.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-work-cta">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
