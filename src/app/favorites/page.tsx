"use client";

import { mockMovies } from "@/shared/consts/mock-data";
import { useFavorites } from "@/shared/hooks/use-favorites";
import { Title } from "@/shared/ui/kit/title";
import { MovieCard } from "@/shared/ui/components/movie-card";
import { EmptyMovies } from "@/shared/ui/components/empty-movies";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteMovies = mockMovies.filter((movie) =>
    favorites.includes(movie.id)
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <Title className="mb-8">Избранное</Title>

      {favoriteMovies.length === 0 ? (
        <div className="text-center">
          <EmptyMovies />
          <p className="text-gray-400 mt-4">
            У вас пока нет избранных фильмов. Нажмите на сердечко, чтобы
            добавить фильм в избранное.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
