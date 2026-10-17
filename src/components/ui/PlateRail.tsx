import { RegisterMark } from "./RegisterMark";

export const railGrid =
  "relative mx-auto grid max-w-6xl grid-cols-1 px-5 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-x-10 sm:px-10";

export function PlateRail({
  letter,
  closing,
}: {
  letter: string;
  closing?: boolean;
}) {
  const mark = "h-5 w-5 shrink-0";
  return (
    <div className="hidden flex-col items-center border-r-2 border-stock/25 py-20 text-stock/65 sm:flex sm:py-28">
      <RegisterMark className={mark} />
      <span className="plate-mark mt-5 text-[0.95rem]">
        Płyta {letter}
      </span>
      {closing ? <RegisterMark className={`${mark} mt-auto`} /> : null}
    </div>
  );
}
