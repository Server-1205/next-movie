/* eslint-disable @next/next/no-img-element */
import { mockMovies } from "@/shared/consts/mock-data";
import { FavoriteButton } from "@/shared/ui/components/favorite-button";
import { StarRating } from "@/shared/ui/components/star-rating";
import { Title } from "@/shared/ui/kit/title";
import { notFound } from "next/navigation";
import { SimilarMovies } from "@/shared/ui/components/similar-movies";
import { MovieTrailer } from "@/shared/ui/components/movie-trailer";

async function MoviePage({ params }: { params: { id: string } }) {
  const movie = mockMovies.find((m) => m.id === Number(params.id));

  if (!movie) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8">
          {/* Poster */}
          <div className="relative h-[500px]">
            <img
              src={movie.poster}
              alt={movie.title}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 350px"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex justify-between items-start">
              <Title>{movie.title}</Title>
              <FavoriteButton movieId={movie.id} size="lg" />
            </div>

            <div className="mt-4 flex items-center gap-4 text-gray-400">
              <span>{movie.year}</span>
              <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-200 text-sm rounded-full border border-purple-800/50">
                {movie.genre}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <StarRating rating={movie.rating} readonly size="lg" />
                <span className="text-lg text-yellow-400">
                  {movie.rating}/10
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">О фильме</h3>
              <p className="text-gray-400 leading-relaxed">
                {movie.title} - {movie.genre.toLowerCase()} фильм {movie.year}{" "}
                года с рейтингом {movie.rating} из 10.
              </p>
            </div>

            {/* Trailer */}
            {movie.trailerUrl && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Трейлер</h3>
                <MovieTrailer
                  trailerUrl={movie.trailerUrl}
                  title={movie.title}
                  poster={movie.poster}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Similar Movies */}
      <SimilarMovies currentMovie={movie} movies={mockMovies} />
    </main>
  );
}

export default MoviePage;
