"use client";

/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/shared/consts/mock-data";
import Link from "next/link";
import { StarRating } from "./star-rating";

type MovieCardProps = {
  movie: Movie;
};

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`movie/${movie.id}`}
      key={movie.id}
      className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      <img
        className="h-[300px] w-full object-cover"
        src={movie.poster}
        alt={movie.title}
      />
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
  );
}
