import type { ReactNode } from "react";

export type Permit = {
  family: string;
  stamp: ReactNode;
  scope: string;
  emblem: ReactNode;
};

export const permits: Permit[] = [
  {
    family: "SEP",
    stamp: "1",
    scope: "Urządzenia, instalacje i sieci elektroenergetyczne",
    emblem: (
      <>
        <path d="M20,6 L36,6 L36,10 L20,10 Z" />
        <path d="M26,10 L30,10 L30,20 L26,20 Z" />
        <path
          d="M28,22 L18,36 L27,36 L24,50 L38,32 L29,32 Z"
          fillRule="evenodd"
        />
        <path d="M8,54 L48,54 L48,58 L8,58 Z" />
      </>
    ),
  },
  {
    family: "SEP",
    stamp: "2",
    scope: "Urządzenia wytwarzające i zużywające ciepło",
    emblem: (
      <>
        <path d="M12,8 L44,8 L44,40 L12,40 Z M18,14 L38,14 L38,34 L18,34 Z" />
        <path d="M22,44 L26,44 L26,58 L22,58 Z" />
        <path d="M30,44 L34,44 L34,58 L30,58 Z" />
        <path d="M6,20 L12,20 L12,24 L6,24 Z M44,20 L50,20 L50,24 L44,24 Z" />
      </>
    ),
  },
  {
    family: "SEP",
    stamp: "3",
    scope: "Urządzenia i instalacje gazowe",
    emblem: (
      <>
        <path d="M28,4 L40,20 L40,34 L16,34 L16,20 Z M24,20 L32,20 L32,30 L24,30 Z" />
        <path d="M14,36 L42,36 L42,40 L14,40 Z" />
        <path d="M20,44 L24,44 L24,58 L20,58 Z" />
        <path d="M32,44 L36,44 L36,58 L32,58 Z" />
      </>
    ),
  },
  {
    family: "F-Gaz",
    stamp: (
      <svg
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="h-[0.62em] w-[0.62em]"
      >
        <path
          fill="currentColor"
          d="M25,2 L31,2 L31,54 L25,54 Z M2,15 L54,15 L54,21 L2,21 Z M2,35 L54,35 L54,41 L2,41 Z"
          transform="rotate(45 28 28)"
        />
      </svg>
    ),
    scope: "Czynniki chłodnicze i układy chłodnicze",
    emblem: (
      <>
        <path d="M10,10 L46,10 L46,14 L10,14 Z" />
        <path d="M14,18 L18,18 L18,44 L14,44 Z" />
        <path d="M38,18 L42,18 L42,44 L38,44 Z" />
        <path d="M22,24 L34,24 L34,28 L22,28 Z M22,34 L34,34 L34,38 L22,38 Z" />
        <path d="M10,48 L46,48 L46,52 L10,52 Z" />
      </>
    ),
  },
];
