"use client";

import { Movie } from "@/shared/consts/mock-data";
import { MovieCard } from "./movie-card";

interface SimilarMoviesProps {
  currentMovie: Movie;
  movies: Movie[];
}

export function SimilarMovies({ currentMovie, movies }: SimilarMoviesProps) {
  const similarMovies = movies
    .filter(
      (movie) =>
        movie.genre === currentMovie.genre && movie.id !== currentMovie.id
    )
    .slice(0, 4);

  if (similarMovies.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Похожие фильмы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
