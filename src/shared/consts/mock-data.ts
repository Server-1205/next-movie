export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
};

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://picsum.photos/seed/inception/300/450",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://picsum.photos/seed/darkknight/300/450",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    poster: "https://picsum.photos/seed/interstellar/300/450",
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    genre: "Drama",
    rating: 8.5,
    poster: "https://picsum.photos/seed/parasite/300/450",
  },
];

export const FILTER_OPTIONS = {
  genres: ["All", ...new Set(mockMovies.map((movie) => movie.genre))],
  years: [...new Set(mockMovies.map((movie) => movie.year))],
  ratings: [...new Set(mockMovies.map((movie) => movie.rating))],
} as const;
