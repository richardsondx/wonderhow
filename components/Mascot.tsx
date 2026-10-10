"use client";

// Wally, the WonderHow owl mascot. Chunky, friendly, big eyes.

export default function Mascot({ size = 120 }: { size?: number }) {
  const INK = "#3A2E2A";
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" role="img" aria-label="Wally the owl">
      {/* body */}
      <ellipse cx="80" cy="92" rx="52" ry="56" fill="#8E6FC8" stroke={INK} strokeWidth="6" />
      {/* tummy */}
      <ellipse cx="80" cy="108" rx="30" ry="32" fill="#D9C9F5" stroke={INK} strokeWidth="5" />
      {/* ear tufts */}
      <path d="M40 52 L30 22 L58 40 Z" fill="#8E6FC8" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
      <path d="M120 52 L130 22 L102 40 Z" fill="#8E6FC8" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
      {/* eyes */}
      <circle cx="60" cy="70" r="20" fill="#fff" stroke={INK} strokeWidth="5" />
      <circle cx="100" cy="70" r="20" fill="#fff" stroke={INK} strokeWidth="5" />
      <circle cx="62" cy="72" r="8" fill={INK} />
      <circle cx="102" cy="72" r="8" fill={INK} />
      <circle cx="65" cy="69" r="3" fill="#fff" />
      <circle cx="105" cy="69" r="3" fill="#fff" />
      {/* beak */}
      <path d="M72 88 L88 88 L80 98 Z" fill="#FFB800" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
      {/* wings */}
      <ellipse cx="32" cy="100" rx="12" ry="26" fill="#7A5CB5" stroke={INK} strokeWidth="5" transform="rotate(12 32 100)" />
      <ellipse cx="128" cy="100" rx="12" ry="26" fill="#7A5CB5" stroke={INK} strokeWidth="5" transform="rotate(-12 128 100)" />
      {/* feet */}
      <ellipse cx="62" cy="146" rx="12" ry="8" fill="#FFB800" stroke={INK} strokeWidth="5" />
      <ellipse cx="98" cy="146" rx="12" ry="8" fill="#FFB800" stroke={INK} strokeWidth="5" />
      {/* graduation cap */}
      <rect x="96" y="6" width="52" height="10" rx="4" fill={INK} transform="rotate(12 96 6)" />
      <path d="M88 22 L122 12 L156 22 L122 32 Z" fill={INK} transform="rotate(12 122 22)" />
    </svg>
  );
}
