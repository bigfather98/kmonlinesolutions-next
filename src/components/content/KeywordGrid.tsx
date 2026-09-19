export default function KeywordGrid({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="my-8 border-2 border-ink bg-white p-6" aria-label="Keywords">
      <p className="mb-4 font-mono-custom text-xs font-bold tracking-widest text-muted uppercase">
        Keywords
      </p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-2 border-ink bg-paper px-3 py-1 font-mono-custom text-xs font-bold text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
