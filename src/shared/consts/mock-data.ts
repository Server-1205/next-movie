export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
  trailerUrl?: string;
};

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://picsum.photos/seed/inception/300/450",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://picsum.photos/seed/darkknight/300/450",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    poster: "https://picsum.photos/seed/interstellar/300/450",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    genre: "Drama",
    rating: 8.5,
    poster: "https://picsum.photos/seed/parasite/300/450",
    trailerUrl: "https://www.youtube.com/embed/5xH0HfJHsaY",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    poster: "https://picsum.photos/seed/shawshank/300/450",
    trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
  },
  {
    id: 6,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    poster: "https://picsum.photos/seed/pulpfiction/300/450",
    trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://picsum.photos/seed/matrix/300/450",
    trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    id: 8,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    poster: "https://picsum.photos/seed/forrestgump/300/450",
    trailerUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
  },
];

export const FILTER_OPTIONS = {
  genres: ["All", ...new Set(mockMovies.map((movie) => movie.genre))],
  years: [...new Set(mockMovies.map((movie) => movie.year))],
  ratings: [...new Set(mockMovies.map((movie) => movie.rating))],
} as const;
