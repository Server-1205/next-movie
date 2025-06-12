"use client";
import { MovieCard } from "@/shared/ui/components/movie-card";
import { useEffect, useState } from "react";
import { mockMovies, Movie } from "@/shared/consts/mock-data";
import { Skeleton } from "@/shared/ui/kit/skeleton";
import { EmptyMovies } from "@/shared/ui/components/empty-movies";

export default function MovieList() {
  // const [selectedGenre, setSelectedGenre] = useState("All");
  // const [selectedYear, setSelectedYear] = useState(0);
  // const [minRating, setMinRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  // const handleSelectedGenre = (genre: string) => {
  //   setSelectedGenre(genre);
  // };

  // const handleRatingChange = (value: number) => {
  //   setMinRating(value);
  // };

  // const handleYearChange = (value: number) => {
  //   setSelectedYear(value);
  // };

  useEffect(() => {
    setIsLoading(true);

    const filterMovies = () => {
      const result = [...mockMovies];

      // if (selectedGenre !== "All") {
      //   result = result.filter((movie) => movie.genre === selectedGenre);
      // }

      // if (minRating > 0) {
      //   result = result.filter((movie) => movie.rating === minRating);
      // }

      // if (selectedYear) {
      //   result = result.filter((movie) => movie.year === selectedYear);
      // }

      setFilteredMovies(result);
    };
    setTimeout(() => {
      filterMovies();

      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {/* <MovieFilters
        selectedGenre={selectedGenre}
        selectedYear={selectedYear}
        minRating={minRating}
        handleGenreChange={handleSelectedGenre}
        handleRatingChange={handleRatingChange}
        handleYearChange={handleYearChange}
      /> */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <EmptyMovies />
      )}
    </>
  );
}
