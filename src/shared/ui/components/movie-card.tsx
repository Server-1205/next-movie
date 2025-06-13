/* eslint-disable @next/next/no-img-element */
"use client";

import { Movie } from "@/shared/consts/mock-data";
import { FavoriteButton } from "./favorite-button";
import Link from "next/link";
import { StarRating } from "./star-rating";

type MovieCardProps = {
  movie: Movie;
};

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`movie/${movie.id}`}>
        <div className="relative h-[300px]">
          <img
            className="object-cover"
            src={movie.poster}
            alt={movie.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{movie.year}</span>
            <span className="flex items-center text-yellow-400">
              <StarRating rating={movie.rating} size="sm" readonly />
            </span>
          </div>
          <div className="mt-2">
            <span className="inline-block px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded-full border border-purple-800/50">
              {movie.genre}
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FavoriteButton movieId={movie.id} />
      </div>
    </div>
  );
}
