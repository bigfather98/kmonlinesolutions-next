interface FeaturedImageProps {
  src: string | null;
  alt: string | null;
}

export default function FeaturedImage({ src, alt }: FeaturedImageProps) {
  if (!src) return null;
  return (
    <figure className="mb-10">
      {/* Plain img: featured images may be local or remote with unknown dimensions. */}
      <img
        src={src}
        alt={alt || "Featured image"}
        fetchPriority="high"
        className="offset-border aspect-video w-full object-cover"
      />
      {alt && (
        <figcaption className="mt-2 text-center font-mono-custom text-xs text-muted">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
