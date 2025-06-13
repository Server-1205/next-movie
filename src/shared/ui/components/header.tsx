"use client";

import Link from "next/link";
import { Search } from "./search";
import { Heart } from "lucide-react";
import { useFavorites } from "@/shared/hooks/use-favorites";

export function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="py-6 px-4 md:px-8 border-b border-gray-700/30 backdrop-blur-md bg-black/30 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/">
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
            FilmFinder
          </h1>
        </Link>

        <ul className="flex items-center gap-6 text-xl">
          <li className="hover:text-purple-400">
            <Link href="/">Главная</Link>
          </li>
          <li className="hover:text-purple-400">
            <Link href="/favorites" className="flex items-center gap-2">
              <Heart
                className={
                  favorites.length > 0 ? "fill-red-500 text-red-500" : ""
                }
              />
              <span className="text-sm">
                {favorites.length > 0 && (
                  <span className="text-red-500">{favorites.length}</span>
                )}
              </span>
            </Link>
          </li>
          <li className="hover:text-purple-400">
            <Link href="/contacts">Контакты</Link>
          </li>
          <li className="hover:text-purple-400">
            <Link href="/about">О нас</Link>
          </li>
        </ul>
        <Search />
      </div>
    </header>
  );
}
