﻿async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Movie: {id}</div>;
}

export default MoviePage;
