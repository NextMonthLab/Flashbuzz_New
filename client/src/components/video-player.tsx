import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  vimeoId: string;
  thumbnailUrl?: string;
  title?: string;
  autoplay?: boolean;
}

export function VideoPlayer({ vimeoId, thumbnailUrl, title, autoplay = false }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black" data-testid={`video-player-${vimeoId}`}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title || "Video player"}
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted cursor-pointer group"
      onClick={() => setIsPlaying(true)}
      data-testid={`video-thumbnail-${vimeoId}`}
    >
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt={title || "Video thumbnail"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
      )}
      
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play className="w-8 h-8 text-foreground ml-1" />
        </div>
      </div>
    </div>
  );
}
