interface ImageBlockProps {
  src: string | null;
  alt: string;
}

export default function ImageBlock({ src, alt }: ImageBlockProps) {
  if (!src) return null;
  return (
    <figure className="my-8">
      {/* Plain img: article images have unknown dimensions, so next/image sizing is impractical. */}
      <img
        src={src}
        alt={alt || "Article image"}
        loading="lazy"
        className="offset-border-sm w-full"
      />
      {alt && (
        <figcaption className="mt-2 text-center font-mono-custom text-xs text-muted">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
