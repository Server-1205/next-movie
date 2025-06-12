export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-gray-700/30 mt-12 backdrop-blur-sm bg-black/20">
      <div className="container mx-auto text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} FilmFinder. All rights reserved.</p>
        <p className="mt-2">Find your next favorite movie with us!</p>
      </div>
    </footer>
  );
}
