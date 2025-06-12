import { mockMovies } from "@/shared/consts/mock-data";
import { ModalTest } from "@/shared/ui/components/modal";
import { MovieModalCard } from "@/shared/ui/components/movie-modal";

export default async function MovieModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = mockMovies.find((m) => {
    return m.id === Number(id);
  });

  if (!movie) {
    return null;
  }

  return (
    <ModalTest>
      <MovieModalCard movie={movie} />
    </ModalTest>
  );
}
