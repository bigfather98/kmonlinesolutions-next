import { Fragment, type ReactNode } from "react";
import { parseMarkdown, type BlockNode, type InlineNode } from "@/lib/markdown";
import CitationBlock from "./CitationBlock";
import NoteCallout from "./NoteCallout";
import WarningCallout from "./WarningCallout";
import KeywordGrid from "./KeywordGrid";
import CodeBlock from "./CodeBlock";
import ImageBlock from "./ImageBlock";
import QuoteBlock from "./QuoteBlock";

const HEADING_STYLES: Record<number, string> = {
  1: "font-slab text-3xl lg:text-4xl font-bold text-ink mt-10 mb-4",
  2: "font-slab text-2xl lg:text-3xl font-bold text-ink mt-10 mb-4",
  3: "font-slab text-xl lg:text-2xl font-bold text-ink mt-8 mb-3",
  4: "font-slab text-lg font-bold text-ink mt-6 mb-2",
  5: "font-slab text-base font-bold text-ink mt-6 mb-2",
  6: "font-mono-custom text-sm font-bold tracking-widest uppercase text-muted mt-6 mb-2",
};

/**
 * Central mapping of Markdown structures to React components.
 * Normal paragraph → <p>, heading → h1-h6, image → ImageBlock,
 * quote → QuoteBlock, code fence → CodeBlock, [!NOTE] → NoteCallout,
 * [!WARNING] → WarningCallout, [!CITE] → CitationBlock,
 * ```keywords fence → KeywordGrid, {#step-N} anchors → HowTo-aware headings.
 */
export function renderInline(nodes: InlineNode[], keyPrefix: string): ReactNode[] {
  return nodes.map((node, i) => {
    const key = `${keyPrefix}-${i}`;
    switch (node.type) {
      case "text":
        return <Fragment key={key}>{node.value}</Fragment>;
      case "br":
        return <br key={key} />;
      case "code":
        return (
          <code
            key={key}
            className="border border-ink/20 bg-white px-1.5 py-0.5 font-mono-custom text-[0.85em] text-accent-hover"
          >
            {node.value}
          </code>
        );
      case "strong":
        return <strong key={key}>{renderInline(node.children, key)}</strong>;
      case "em":
        return <em key={key}>{renderInline(node.children, key)}</em>;
      case "image":
        if (!node.src) return <Fragment key={key}>{node.alt}</Fragment>;
        return (
          <img
            key={key}
            src={node.src}
            alt={node.alt}
            loading="lazy"
            className="offset-border-sm my-4 w-full"
          />
        );
      case "link": {
        if (!node.href) return <Fragment key={key}>{renderInline(node.children, key)}</Fragment>;
        const external = /^https?:\/\//i.test(node.href);
        return (
          <a
            key={key}
            href={node.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-bold text-accent-hover underline underline-offset-2 hover:text-ink"
          >
            {renderInline(node.children, key)}
          </a>
        );
      }
    }
  });
}

function renderBlocks(blocks: BlockNode[], keyPrefix: string): ReactNode[] {
  return blocks.map((block, i) => {
    const key = `${keyPrefix}-${i}`;
    switch (block.type) {
      case "paragraph":
        return (
          <p key={key} className="font-slab text-ink/90 leading-relaxed">
            {renderInline(block.children, key)}
          </p>
        );
      case "heading": {
        const Tag = `h${block.level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        return (
          <Tag
            key={key}
            id={block.id}
            {...(block.isHowToStep ? { "data-howto-step": block.id } : {})}
            className={`${HEADING_STYLES[block.level]} scroll-mt-24`}
          >
            {renderInline(block.children, key)}
          </Tag>
        );
      }
      case "code":
        return <CodeBlock key={key} code={block.value} lang={block.lang} />;
      case "keywords":
        return <KeywordGrid key={key} items={block.items} />;
      case "list": {
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <ListTag
            key={key}
            className={`font-slab my-6 space-y-2 text-ink/90 ${
              block.ordered ? "list-decimal pl-6" : "list-disc pl-6"
            }`}
          >
            {block.items.map((item, j) => (
              <li key={`${key}-${j}`} className="leading-relaxed">
                {renderInline(item, `${key}-${j}`)}
              </li>
            ))}
          </ListTag>
        );
      }
      case "quote":
        return <QuoteBlock key={key}>{renderBlocks(block.children, key)}</QuoteBlock>;
      case "note":
        return <NoteCallout key={key}>{renderBlocks(block.children, key)}</NoteCallout>;
      case "warning":
        return <WarningCallout key={key}>{renderBlocks(block.children, key)}</WarningCallout>;
      case "cite":
        return (
          <CitationBlock
            key={key}
            statement={block.statement.map((para, p) => (
              <p key={p} className={p > 0 ? "mt-3" : undefined}>
                {renderInline(para, `${key}-s${p}`)}
              </p>
            ))}
            source={block.source}
            url={block.url}
          />
        );
      case "table":
        return (
          <div key={key} className="offset-border-sm my-8 overflow-x-auto bg-white">
            <table className="w-full border-collapse font-slab text-sm">
              <thead>
                <tr className="bg-ink text-paper">
                  {block.headers.map((cell, c) => (
                    <th
                      key={c}
                      scope="col"
                      className="border border-ink px-4 py-3 text-left font-bold"
                    >
                      {renderInline(cell, `${key}-h${c}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className={r % 2 === 1 ? "bg-paper" : undefined}>
                    {row.map((cell, c) => (
                      <td key={c} className="border border-ink/30 px-4 py-3 text-ink/90">
                        {renderInline(cell, `${key}-r${r}c${c}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "imageBlock":
        return <ImageBlock key={key} src={block.src} alt={block.alt} />;
      case "hr":
        return <hr key={key} className="my-10 border-t-2 border-ink/20" />;
    }
  });
}

export default function MarkdownRenderer({ markdown }: { markdown: string }) {
  const blocks = parseMarkdown(markdown);
  return <>{renderBlocks(blocks, "md")}</>;
}
