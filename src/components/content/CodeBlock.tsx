interface CodeBlockProps {
  code: string;
  lang: string | null;
}

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  return (
    <div className="offset-border-sm my-8 overflow-hidden bg-ink">
      {lang && (
        <div className="border-b-2 border-paper/20 px-4 py-2 font-mono-custom text-xs font-bold tracking-widest text-paper/60 uppercase">
          {lang}
        </div>
      )}
      <pre className="overflow-x-auto p-5 font-mono-custom text-sm leading-relaxed text-paper">
        <code>{code.replace(/\n$/, "")}</code>
      </pre>
    </div>
  );
}
