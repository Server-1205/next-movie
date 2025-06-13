"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface MovieTrailerProps {
  trailerUrl?: string;
  title: string;
  poster: string;
}

export function MovieTrailer({ trailerUrl, title, poster }: MovieTrailerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!trailerUrl) {
    return null;
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          {/* Превью трейлера */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          </div>

          {/* Кнопка воспроизведения */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Воспроизвести трейлер"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-600/80 text-white transition-transform group-hover:scale-110">
              <Play size={40} className="ml-2" />
            </div>
            <span className="absolute mt-24 text-xl font-semibold">
              Смотреть трейлер
            </span>
          </button>
        </div>
      ) : (
        <iframe
          src={trailerUrl}
          title={`Трейлер фильма ${title}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
