import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photos, categories, getPhotosByCategory, type Photo } from "@/lib/photography";

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  const filteredPhotos = getPhotosByCategory(activeCategory);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Photography</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-photography-title">
              Stills from the Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every frame tells a story. Browse our photography portfolio featuring portraits, lifestyle, events, and documentary work captured with the same cinematic eye we bring to video.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[3/2] rounded-lg overflow-hidden bg-muted cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
                data-testid={`card-photo-${photo.category}-${photo.id.split('_')[0]}`}
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-sm text-white/80 capitalize">{photo.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Need photography for your project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We offer professional photography services alongside our video production work. Perfect for marketing materials, team portraits, and event coverage.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-photography-cta">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          data-testid="photo-lightbox"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
              onClick={() => setSelectedPhoto(null)}
              data-testid="button-close-lightbox"
            >
              &times;
            </button>
            <div className="absolute bottom-4 left-4 text-white/80 text-sm capitalize">
              {selectedPhoto.category}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
