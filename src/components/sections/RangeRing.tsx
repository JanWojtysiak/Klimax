import { ringRadii } from "@/data/service-area";

export function RangeRing({ active }: { active: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-14 w-14 shrink-0 sm:h-20 sm:w-20"
      fill="none"
      stroke="currentColor"
    >
      {ringRadii.map((radius, index) => (
        <path
          key={radius}
          d={`M ${4 + radius} 60 A ${radius} ${radius} 0 0 0 4 ${60 - radius}`}
          strokeWidth={index === active ? 7 : 2}
          opacity={index === active ? 1 : 0.35}
        />
      ))}
      <path d="M4,54 L4,60 L10,60 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
