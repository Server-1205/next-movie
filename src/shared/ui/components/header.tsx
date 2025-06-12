import Link from "next/link";
import { Search } from "./search";

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-gray-700/30 backdrop-blur-md bg-black/30 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
          FilmFinder
        </h1>

        <ul className="flex items-center gap-2 text-xl">
          <li className="hover:text-purple-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-purple-400">
            <Link href="/contacts">Contacts</Link>
          </li>
          <li className="hover:text-purple-400">
            <Link href="/about">About As</Link>
          </li>
        </ul>
        <Search />
      </div>
    </header>
  );
}
