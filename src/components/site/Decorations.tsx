/* Thin-line SVG decorations – maternal, calm, artistic */
import type { CSSProperties } from "react";

type DecorProps = { className?: string; style?: CSSProperties };

/** Delicate lotus / birth flower */
export function LotusDecor({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M60 72 C60 72 34 58 34 38 C34 24 46 18 60 30 C74 18 86 24 86 38 C86 58 60 72 60 72Z"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
      <path d="M60 72 C60 72 20 54 22 30 C24 16 38 14 60 30 C82 14 96 16 98 30 C100 54 60 72 60 72Z"
        stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.35"/>
      <path d="M60 72 C60 72 8 48 12 22 C16 6 34 6 60 30 C86 6 104 6 108 22 C112 48 60 72 60 72Z"
        stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.18"/>
      <line x1="60" y1="72" x2="60" y2="80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

/** Gentle wave line */
export function WaveLine({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M0 10 C25 2 50 18 75 10 C100 2 125 18 150 10 C175 2 185 14 200 10"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/** Small leaf sprig */
export function LeafSprig({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M30 75 L30 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M30 55 C30 55 14 48 12 34 C10 22 22 16 30 28" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <path d="M30 38 C30 38 46 30 48 16 C50 4 38 -2 30 10" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/** Abstract mother-and-baby circles (like the logo icon) */
export function MotherBabyDecor({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M50 82 C28 82 18 68 20 52 C22 36 36 28 50 36 C64 28 78 36 80 52 C82 68 72 82 50 82Z"
        stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M50 68 C36 68 30 58 32 48 C34 40 42 36 50 42 C58 36 66 40 68 48 C70 58 64 68 50 68Z"
        stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
    </svg>
  );
}

/** Delicate dot-scatter */
export function DotScatter({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {([
        [12, 20], [45, 8], [78, 30], [110, 12], [145, 25],
        [25, 55], [60, 70], [92, 48], [128, 65], [155, 80],
        [8, 88], [38, 95], [72, 85], [105, 92], [140, 78],
      ] as [number, number][]).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="currentColor" opacity={0.25 + (i % 4) * 0.1}/>
      ))}
    </svg>
  );
}

/** Single delicate flower */
export function FlowerSmall({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {([0, 45, 90, 135, 180, 225, 270, 315] as number[]).map((deg, i) => (
        <ellipse key={i} cx="20" cy="20" rx="3" ry="8"
          transform={`rotate(${deg} 20 20)`}
          stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5"/>
      ))}
      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7"/>
    </svg>
  );
}
