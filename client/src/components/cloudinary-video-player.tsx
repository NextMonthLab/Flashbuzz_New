import { useState } from "react";
import { Play } from "lucide-react";

interface CloudinaryVideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
  title?: string;
  autoplay?: boolean;
  testId?: string;
}

export function CloudinaryVideoPlayer({ 
  videoUrl, 
  posterUrl, 
  title, 
  autoplay = false,
  testId = "cloudinary-video"
}: CloudinaryVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black" data-testid={`${testId}-player`}>
        <video
          src={videoUrl}
          poster={posterUrl}
          controls
          autoPlay
          className="w-full h-full object-contain"
          title={title || "Video player"}
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted cursor-pointer group"
      onClick={() => setIsPlaying(true)}
      data-testid={`${testId}-thumbnail`}
    >
      <img
        src={posterUrl}
        alt={title || "Video thumbnail"}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-flash-pink/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
          <Play className="w-8 h-8 text-white ml-1" />
        </div>
      </div>
    </div>
  );
}
