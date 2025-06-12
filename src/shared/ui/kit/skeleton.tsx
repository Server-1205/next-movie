export function Skeleton() {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 animate-pulse">
      <div className="h-64 bg-gray-700/50"></div>
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-700/50 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700/50 rounded w-1/2"></div>
      </div>
    </div>
  );
}
