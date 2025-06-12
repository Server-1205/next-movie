import MovieList from "@/shared/ui/components/movie-list";
import { MovieSlider } from "@/shared/ui/components/movie-slider";

export default function Page() {
  return (
    <>
      <MovieSlider />
      <div className="py-8">
        <MovieList />
      </div>
    </>
  );
}
