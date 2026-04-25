import { Link } from "wouter";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <article 
        className="group relative overflow-visible rounded-lg cursor-pointer hover-elevate"
        data-testid={`card-project-${project.slug}`}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          {project.thumbnailUrl ? (
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Play className="w-12 h-12 text-primary/50" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-foreground ml-1" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {project.sector}
              </Badge>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-1 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-white/80">{project.client}</p>
            
            <p className="text-sm text-white/70 mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              {project.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
