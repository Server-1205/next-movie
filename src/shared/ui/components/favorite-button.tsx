"use client";

import { useFavorites } from "@/shared/hooks/use-favorites";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  movieId: number;
  size?: "sm" | "lg";
}

export function FavoriteButton({ movieId, size = "sm" }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isLiked = isFavorite(movieId);

  return (
    <button
      onClick={() => toggleFavorite(movieId)}
      className={`
        transition-all duration-300
        ${isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500"}
        ${size === "lg" ? "scale-125" : ""}
      `}
      aria-label={isLiked ? "Удалить из избранного" : "Добавить в избранное"}
    >
      <Heart className={isLiked ? "fill-current" : ""} />
    </button>
  );
}
