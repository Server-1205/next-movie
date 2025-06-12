"use client";

import { useState } from "react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  onChange?: (value: number) => void;
  readonly?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  onChange,
  readonly = false,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const value = index + 1;
        const filled = hoverRating ? value <= hoverRating : value <= rating;

        return (
          <button
            key={index}
            type="button"
            disabled={readonly}
            className={`${
              readonly ? "cursor-default" : "cursor-pointer"
            } transition-transform hover:scale-110`}
            onClick={() => onChange?.(value)}
            onMouseEnter={() => !readonly && setHoverRating(value)}
            onMouseLeave={() => !readonly && setHoverRating(0)}
          >
            <svg
              className={`${sizeClasses[size]} ${
                filled ? "text-yellow-400" : "text-gray-400"
              }`}
              fill={filled ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
