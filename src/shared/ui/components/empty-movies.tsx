export function EmptyMovies() {
  return (
    <div className="text-center py-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16 mx-auto text-gray-600 mb-4 opacity-70"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <h3 className="text-xl font-semibold text-gray-300 mb-2">
        No movies found
      </h3>
      <p className="text-gray-400 max-w-md mx-auto">
        Try adjusting your search or filter criteria
      </p>
    </div>
  );
}
