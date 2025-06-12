export function Search() {
  return (
    <div className="w-full max-w-lg relative group">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full py-3 pl-4 pr-12 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-purple-500"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
        🔍
      </button>
    </div>
  );
}
