type P = { className?: string };

export function PaintStroke({ className }: P) {
  return (
    <svg viewBox="0 0 600 200" className={className} aria-hidden fill="currentColor">
      <path d="M20 120c60-70 160-90 260-70s180 10 260-30c30-15 50 10 30 30-80 70-200 70-290 60S110 140 50 170c-30 15-50-25-30-50z" />
    </svg>
  );
}

export function Botanical({ className }: P) {
  return (
    <svg viewBox="0 0 200 320" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M100 320V40" />
      {[60, 110, 160, 210, 260].map((y, i) => (
        <g key={y}>
          <path d={`M100 ${y}c-30-10-55-35-60-${30 - i * 2}c30 2 55 22 60 ${30 - i * 2}`} />
          <path d={`M100 ${y + 20}c30-10 55-35 60-${30 - i * 2}c-30 2-55 22-60 ${30 - i * 2}`} />
        </g>
      ))}
      <circle cx="100" cy="30" r="10" />
    </svg>
  );
}
