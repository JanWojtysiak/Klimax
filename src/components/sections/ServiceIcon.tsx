import type { ReactNode } from "react";
import type { ServiceIconName } from "@/data/services";

const shapes: Record<ServiceIconName, ReactNode> = {
  heatPump: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" />
      <circle cx="9" cy="12" r="3.6" />
      <path d="M9 8.4V12h3.6M16 8.5h3M16 12h3M16 15.5h3" />
    </>
  ),
  airConditioning: (
    <>
      <rect x="2.5" y="4.5" width="19" height="6.5" />
      <path d="M6 8h8" />
      <path d="M6 14.5 9 17l3-2.5M12 14.5 15 17l3-2.5M6 18.5 9 21l3-2.5M12 18.5 15 21l3-2.5" />
    </>
  ),
  recuperation: (
    <>
      <rect x="7.5" y="7.5" width="9" height="9" />
      <path d="M7.5 10H2.5M2.5 10V4M16.5 14h5M21.5 14v6" />
      <path d="M4.5 6.5 2.5 4 .8 6.5M19.5 17.5l2 2.5 1.7-2.5" />
    </>
  ),
  electric: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" />
      <path d="M13.5 6 9.5 12.5h5L10.5 18" />
    </>
  ),
  water: (
    <>
      <path d="M12 3.5c3 4 5 6.6 5 9a5 5 0 0 1-10 0c0-2.4 2-5 5-9Z" />
      <path d="M12 12.5v4" />
    </>
  ),
  floor: (
    <>
      <path d="M2.5 19.5h19" />
      <path d="M3.5 16V7.5h3.4V16h3.4V7.5h3.4V16h3.4V7.5h3.4V16" />
    </>
  ),
};

const colors: Record<ServiceIconName, string> = {
  heatPump: "text-vermilion",
  airConditioning: "text-slate",
  recuperation: "text-spruce/70 group-hover:text-stock/80",
  electric: "text-ochre",
  water: "text-slate",
  floor: "text-vermilion",
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-[1em] w-[1em] shrink-0 ${colors[name]}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {shapes[name]}
    </svg>
  );
}
