function Arm({ d, className }: { d: string; className: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className={`absolute -top-[24px] h-[40px] w-[calc(50%-38px)] overflow-visible ${className}`}
      fill="none"
    >
      <path d={d} stroke="#16332b" strokeWidth="14" vectorEffect="non-scaling-stroke" />
      <path d={d} stroke="#efe9da" strokeWidth="9" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Glove({ className }: { className: string }) {
  return (
    <svg viewBox="-11 -13 38 28" className={`absolute -top-[17.5px] h-[38px] w-[51px] ${className}`}>
      <g stroke="#16332b" strokeWidth="2.2" strokeLinejoin="round" fill="#c0803a">
        <ellipse cx="-5" cy="2" rx="4" ry="6" />
        <rect x="-2" y="-2" width="6" height="14" rx="3" />
        <rect x="4" y="-2" width="6" height="14" rx="3" />
        <rect x="10" y="-2" width="6" height="13" rx="3" />
        <rect x="-5" y="-11" width="24" height="15" rx="7" />
        <rect x="16" y="-9" width="8" height="18" rx="3" fill="#9d6528" />
      </g>
    </svg>
  );
}

export function MascotHug() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-8 h-0 md:hidden">
      <Arm d="M100 8C60 2 30 24 0 24" className="left-[26px]" />
      <Arm d="M0 8C40 2 70 24 100 24" className="right-[26px]" />
      <svg
        viewBox="0 0 100 60"
        className="mascot absolute -top-[96px] left-1/2 h-[96px] w-[160px] -translate-x-1/2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="36" y="28" width="28" height="54" rx="14" fill="#efe9da" stroke="#16332b" strokeWidth="2" />
        <rect x="36" y="40" width="28" height="4" fill="#16332b" />
        <circle cx="44" cy="42" r="5.5" fill="#efe9da" stroke="#16332b" strokeWidth="2.5" />
        <circle cx="56" cy="42" r="5.5" fill="#efe9da" stroke="#16332b" strokeWidth="2.5" />
        <g className="mascot-blink">
          <circle cx="42.3" cy="40.3" r="2.2" fill="#16332b" />
          <circle cx="54.3" cy="40.3" r="2.2" fill="#16332b" />
        </g>
        <path d="M45 52q4 3.5 8 0" stroke="#16332b" strokeWidth="2" />
        <g className="mascot-hat">
          <path d="M34 30q0-16 16-16t16 16Z" fill="#c0803a" />
          <rect x="30" y="27" width="40" height="4.5" rx="2.25" fill="#c0803a" />
        </g>
      </svg>
      <Glove className="-left-[15px]" />
      <Glove className="-right-[15px] -scale-x-100" />
    </div>
  );
}
