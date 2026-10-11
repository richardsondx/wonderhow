"use client";

// Illustrated step art for the sample stories: pre-generated Bluey-style
// paintings with a slow cinematic drift and a fade on every step change.

export default function SampleArt({ slug, step }: { slug: string; step: number }) {
  return (
    <div className="sample-art" role="img" aria-label={`Painting for step ${step + 1}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={`${slug}-${step}`}
        src={`/illustrations/samples/${slug}/${step + 1}.png`}
        alt=""
      />
    </div>
  );
}
