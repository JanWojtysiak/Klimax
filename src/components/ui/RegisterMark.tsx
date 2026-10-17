export function RegisterMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0V7M12 17V24M0 12H7M17 12H24"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 7.5 16.5 12 12 16.5 7.5 12Z" fill="currentColor" />
    </svg>
  );
}
