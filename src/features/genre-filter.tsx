import { Select } from "@/shared/ui/kit/select";
import { FILTER_OPTIONS } from "@/shared/consts/mock-data";

type MovieFiltersProps = {
  selectedYear: number;
  minRating: number;
  selectedGenre: string;
  handleGenreChange: (option: string) => void;
  handleYearChange: (option: number) => void;
  handleRatingChange: (option: number) => void;
};

export function MovieFilters({
  selectedGenre,
  minRating,
  selectedYear,
  handleGenreChange,
  handleRatingChange,
  handleYearChange,
}: MovieFiltersProps) {
  return (
    <section className="py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3">
          <Select<string>
            options={FILTER_OPTIONS.genres}
            selected={selectedGenre}
            label=""
            onChange={handleGenreChange}
          />
          <Select<number>
            options={FILTER_OPTIONS.ratings}
            selected={minRating}
            label="All ratings"
            onChange={handleRatingChange}
          />
          <Select<number>
            options={FILTER_OPTIONS.years}
            selected={selectedYear}
            label="All years"
            onChange={handleYearChange}
          />
        </div>
      </div>
    </section>
  );
}
