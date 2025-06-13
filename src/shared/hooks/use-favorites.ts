"use client";

import { useCallback, useEffect, useState } from "react";

const FAVORITES_KEY = "movie-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = useCallback((movieId: number) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId];

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (movieId: number) => {
      return favorites.includes(movieId);
    },
    [favorites]
  );

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
