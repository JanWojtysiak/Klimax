import { RegisterMark } from "./RegisterMark";

export const railGrid =
  "relative mx-auto grid max-w-6xl grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 px-5 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-x-10 sm:px-10";

export function PlateRail({
  letter,
  closing,
}: {
  letter: string;
  closing?: boolean;
}) {
  const mark = "h-4 w-4 shrink-0 sm:h-5 sm:w-5";
  return (
    <div className="flex flex-col items-center border-r-2 border-stock/25 py-20 text-stock/65 sm:py-28">
      <RegisterMark className={mark} />
      <span className="plate-mark mt-5 text-[0.72rem] sm:text-[0.95rem]">
        Płyta {letter}
      </span>
      {closing ? <RegisterMark className={`${mark} mt-auto`} /> : null}
    </div>
  );
}
