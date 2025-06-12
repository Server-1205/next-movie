import { ChangeEvent } from "react";

type SelectProps<T> = {
  options: readonly T[];
  selected: T;
  label: string;
  onChange: (value: T) => void;
  id?: string;
};

export function Select<T>({
  selected,
  options,
  label,
  onChange,
  id = crypto.randomUUID(),
}: SelectProps<T>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // Безопасное преобразование типов
    if (typeof selected === "number") {
      onChange(Number(value) as T);
    } else {
      onChange(value as T);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <select
        id={id}
        value={String(selected)}
        onChange={handleChange}
        className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white"
        aria-label={label}
      >
        <option value="">{label}</option>
        {options.map((item) => (
          <option key={String(item)} value={String(item)}>
            {String(item)}
          </option>
        ))}
      </select>
    </div>
  );
}
