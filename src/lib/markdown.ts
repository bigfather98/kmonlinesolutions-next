/**
 * Minimal, dependency-free Markdown parser for blog `body_markdown`.
 *
 * Supports standard Markdown (paragraphs, headings, bold, italic, links,
 * images, ordered/unordered lists, blockquotes, code fences, tables,
 * horizontal rules) plus the site's custom conventions:
 *
 * - Heading anchors:        `## How It Works {#how-it-works}`
 * - HowTo steps:            `## Step 1: ... {#step-1}`
 * - Note callout:           `> [!NOTE]`
 * - Warning callout:        `> [!WARNING]`
 * - Citation block:         `> [!CITE]` + `Source:` / `URL:` lines
 * - Keyword grid:           ` ```keywords ` fence, one keyword per line
 *
 * SECURITY: the parser produces a plain data AST — never HTML strings.
 * The renderer builds React elements from the AST, so text is escaped by
 * React automatically. Raw HTML in the source is treated as plain text.
 * Link/image URLs are restricted to http(s), mailto (links), and
 * site-relative paths; anything else renders as inert text.
 */

export type InlineNode =
  | { type: "text"; value: string }
  | { type: "strong"; children: InlineNode[] }
  | { type: "em"; children: InlineNode[] }
  | { type: "code"; value: string }
  | { type: "link"; href: string | null; children: InlineNode[] }
  | { type: "image"; src: string | null; alt: string }
  | { type: "br" };

export type BlockNode =
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; id: string; isHowToStep: boolean; children: InlineNode[] }
  | { type: "paragraph"; children: InlineNode[] }
  | { type: "code"; lang: string | null; value: string }
  | { type: "keywords"; items: string[] }
  | { type: "list"; ordered: boolean; items: InlineNode[][] }
  | { type: "quote"; children: BlockNode[] }
  | { type: "note"; children: BlockNode[] }
  | { type: "warning"; children: BlockNode[] }
  | { type: "cite"; statement: InlineNode[][]; source: string | null; url: string | null }
  | { type: "table"; headers: InlineNode[][]; rows: InlineNode[][][] }
  | { type: "imageBlock"; src: string | null; alt: string }
  | { type: "hr" };

/** Allow http(s), mailto (links only), and site-relative URLs. Block everything else. */
export function sanitizeUrl(raw: string, opts: { allowMailto?: boolean } = {}): string | null {
  const url = raw.trim();
  if (!url || /[\s<>]/.test(url)) return null;
  const lower = url.toLowerCase();
  if (lower.startsWith("javascript:") || lower.startsWith("vbscript:") || lower.startsWith("data:") || lower.startsWith("blob:")) {
    return null;
  }
  if (/^https?:\/\//i.test(url)) return url;
  if (opts.allowMailto && /^mailto:[^\s<>]+$/i.test(url)) return url;
  if (url.startsWith("#") || url.startsWith("/") || url.startsWith("./") || url.startsWith("../")) return url;
  // Bare relative paths such as `images/foo.png` (no scheme).
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)) return url;
  return null;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/* ---------------------------------- inline ---------------------------------- */

function parseInlineChildren(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let rest = text;

  const patterns: { re: RegExp; make: (m: RegExpMatchArray) => InlineNode | InlineNode[] }[] = [
    { re: /^!\[([^\]\n]*)\]\(([^)\n]+)\)/, make: (m) => ({ type: "image", src: sanitizeUrl(m[2].split(/\s+/)[0]), alt: m[1] }) },
    { re: /^\[([^\]\n]+)\]\(([^)\n]+)\)/, make: (m) => ({ type: "link", href: sanitizeUrl(m[2].split(/\s+/)[0], { allowMailto: true }), children: parseInlineChildren(m[1]) }) },
    { re: /^<(https?:\/\/[^<>\s]+)>/, make: (m) => ({ type: "link", href: m[1], children: [{ type: "text", value: m[1] }] }) },
    { re: /^`([^`\n]+)`/, make: (m) => ({ type: "code", value: m[1] }) },
    { re: /^\*\*([^*]+)\*\*/, make: (m) => ({ type: "strong", children: parseInlineChildren(m[1]) }) },
    { re: /^__([^_]+)__/, make: (m) => ({ type: "strong", children: parseInlineChildren(m[1]) }) },
    { re: /^\*([^*]+)\*/, make: (m) => ({ type: "em", children: parseInlineChildren(m[1]) }) },
    { re: /^_([^_]+)_/, make: (m) => ({ type: "em", children: parseInlineChildren(m[1]) }) },
  ];

  while (rest.length > 0) {
    let matched = false;
    for (const { re, make } of patterns) {
      const m = rest.match(re);
      if (m) {
        const made = make(m);
        if (Array.isArray(made)) nodes.push(...made);
        else nodes.push(made);
        rest = rest.slice(m[0].length);
        matched = true;
        break;
      }
    }
    if (matched) continue;
    // Plain text up to the next special character.
    const next = rest.search(/[![<*_`]/);
    if (next === -1) {
      nodes.push({ type: "text", value: rest });
      break;
    }
    if (next === 0) {
      nodes.push({ type: "text", value: rest[0] });
      rest = rest.slice(1);
    } else {
      nodes.push({ type: "text", value: rest.slice(0, next) });
      rest = rest.slice(next);
    }
  }
  return nodes;
}

/** Split paragraph lines on hard breaks (two trailing spaces) and parse inline. */
export function parseParagraphLines(lines: string[]): InlineNode[] {
  const nodes: InlineNode[] = [];
  lines.forEach((line, i) => {
    const hardBreak = / {2,}$/.test(line);
    const clean = hardBreak ? line.replace(/ {2,}$/, "") : line;
    if (clean) nodes.push(...parseInlineChildren(clean));
    if (hardBreak && i < lines.length - 1) nodes.push({ type: "br" });
    else if (i < lines.length - 1) nodes.push({ type: "text", value: " " });
  });
  return nodes;
}

function inlineText(nodes: InlineNode[]): string {
  return nodes
    .map((n) => {
      switch (n.type) {
        case "text":
        case "code":
          return n.value;
        case "strong":
        case "em":
        case "link":
          return inlineText(n.children);
        case "image":
          return n.alt;
        case "br":
          return " ";
      }
    })
    .join("");
}

/* ---------------------------------- blocks ---------------------------------- */

const HEADING_RE = /^(#{1,6})\s+(.*?)\s*$/;
const ANCHOR_RE = /\s*\{#([A-Za-z0-9_-]+)\}\s*$/;
const HR_RE = /^\s{0,3}(?:---|\*\*\*|___)\s*$/;
const FENCE_RE = /^(`{3,}|~{3,})\s*([A-Za-z0-9_-]*)\s*$/;
const UL_RE = /^\s{0,3}[-*+]\s+(.*)$/;
const OL_RE = /^\s{0,3}\d+[.)]\s+(.*)$/;
const TABLE_DELIM_RE = /^\s*\|?\s*:?-{1,}:?\s*(\|\s*:?-{1,}:?\s*)*\|?\s*$/;
const DIRECTIVE_RE = /^\[!(NOTE|WARNING|CITE)\]\s*$/i;

export function parseMarkdown(markdown: string): BlockNode[] {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const blocks: BlockNode[] = [];
  const usedIds = new Map<string, number>();

  const uniqueId = (base: string, fallback: string): string => {
    let id = base || fallback;
    if (!id) id = fallback;
    const count = usedIds.get(id) ?? 0;
    usedIds.set(id, count + 1);
    return count === 0 ? id : `${id}-${count}`;
  };

  let i = 0;
  let paragraph: string[] = [];
  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", children: parseParagraphLines(paragraph) });
      paragraph = [];
    }
  };

  const parseHeading = (line: string): void => {
    const m = line.match(HEADING_RE);
    if (!m) return;
    const level = Math.min(6, m[1].length) as 1 | 2 | 3 | 4 | 5 | 6;
    let text = m[2].trim();
    let explicitId: string | null = null;
    const anchor = text.match(ANCHOR_RE);
    if (anchor) {
      explicitId = anchor[1];
      text = text.slice(0, anchor.index).trim();
    }
    const children = parseInlineChildren(text);
    const base = explicitId ?? slugify(inlineText(children));
    const id = uniqueId(base, `heading-${blocks.length + 1}`);
    blocks.push({
      type: "heading",
      level,
      id,
      isHowToStep: /^step-\d+$/i.test(explicitId ?? ""),
      children,
    });
  };

  while (i < lines.length) {
    const line = lines[i];

    // Fenced blocks (code + custom `keywords` fence).
    const fence = line.match(FENCE_RE);
    if (fence) {
      flushParagraph();
      const lang = fence[2] ? fence[2].toLowerCase() : null;
      const content: string[] = [];
      i++;
      while (i < lines.length && !lines[i].match(/^(`{3,}|~{3,})\s*$/)) {
        content.push(lines[i]);
        i++;
      }
      i++; // consume closing fence
      if (lang === "keywords") {
        const items = content.map((l) => l.trim()).filter((l) => l.length > 0 && !l.startsWith("#"));
        if (items.length > 0) blocks.push({ type: "keywords", items });
      } else if (content.length > 0 || lang) {
        blocks.push({ type: "code", lang, value: content.join("\n") });
      }
      continue;
    }

    // Blank line ends a paragraph.
    if (/^\s*$/.test(line)) {
      flushParagraph();
      i++;
      continue;
    }

    // ATX headings (with optional {#anchor}).
    if (HEADING_RE.test(line)) {
      flushParagraph();
      parseHeading(line);
      i++;
      continue;
    }

    // Horizontal rule.
    if (HR_RE.test(line)) {
      flushParagraph();
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Tables (header + delimiter + rows).
    if (
      line.includes("|") &&
      i + 1 < lines.length &&
      TABLE_DELIM_RE.test(lines[i + 1]) &&
      lines[i + 1].includes("-")
    ) {
      flushParagraph();
      const splitRow = (row: string): InlineNode[][] =>
        row
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((cell) => parseInlineChildren(cell.trim()));
      const headers = splitRow(line);
      i += 2;
      const rows: InlineNode[][][] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim().length > 0) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // Lists (single level; indented lines continue the current item).
    if (UL_RE.test(line) || OL_RE.test(line)) {
      flushParagraph();
      const ordered = OL_RE.test(line);
      const items: InlineNode[][] = [];
      let current: string[] = [];
      const pushItem = () => {
        if (current.length > 0) {
          items.push(parseParagraphLines(current));
          current = [];
        }
      };
      while (i < lines.length) {
        const ul = lines[i].match(UL_RE);
        const ol = lines[i].match(OL_RE);
        if ((ordered && ol) || (!ordered && ul)) {
          pushItem();
          current.push((ordered ? ol : ul)![1]);
          i++;
        } else if (/^(?:  |\t)\S/.test(lines[i]) && current.length > 0) {
          current.push(lines[i].trim());
          i++;
        } else break;
      }
      pushItem();
      if (items.length > 0) blocks.push({ type: "list", ordered, items });
      continue;
    }

    // Blockquotes + callout directives.
    if (/^\s*>/.test(line)) {
      flushParagraph();
      const inner: string[] = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        inner.push(lines[i].replace(/^\s*> ?/, ""));
        i++;
      }
      const directive = inner[0] ? inner[0].match(DIRECTIVE_RE) : null;
      const body = directive ? inner.slice(1) : inner;
      // Skip a single blank line after the directive.
      while (body.length > 0 && /^\s*$/.test(body[0])) body.shift();
      if (!directive) {
        blocks.push({ type: "quote", children: parseMarkdown(body.join("\n")) });
      } else if (directive[1].toUpperCase() === "CITE") {
        blocks.push(parseCitation(body));
      } else {
        const children = parseMarkdown(body.join("\n"));
        blocks.push(
          directive[1].toUpperCase() === "NOTE"
            ? { type: "note", children }
            : { type: "warning", children },
        );
      }
      continue;
    }

    // Standalone image line becomes an ImageBlock.
    const imgOnly = line.trim().match(/^!\[([^\]\n]*)\]\(([^)\n]+)\)$/);
    if (imgOnly) {
      flushParagraph();
      blocks.push({
        type: "imageBlock",
        src: sanitizeUrl(imgOnly[2].split(/\s+/)[0]),
        alt: imgOnly[1],
      });
      i++;
      continue;
    }

    paragraph.push(line);
    i++;
  }
  flushParagraph();
  return blocks;
}

/**
 * Citation body convention:
 *   statement lines...
 *   Source: <source text>
 *   URL: <https://...>
 * The URL is validated; an invalid URL renders the source as plain text.
 */
function parseCitation(lines: string[]): Extract<BlockNode, { type: "cite" }> {
  let source: string | null = null;
  let url: string | null = null;
  const statementLines: string[] = [];

  for (const line of lines) {
    const src = line.match(/^\s*Source\s*:\s*(.+?)\s*$/i);
    const u = line.match(/^\s*URL\s*:\s*(.+?)\s*$/i);
    if (src) source = src[1].trim();
    else if (u) url = sanitizeUrl(u[1].trim());
    else statementLines.push(line);
  }
  // Drop trailing blank lines from the statement.
  while (statementLines.length > 0 && /^\s*$/.test(statementLines[statementLines.length - 1])) {
    statementLines.pop();
  }
  const paragraphs = statementLines
    .join("\n")
    .split(/\n\s*\n/)
    .map((p) => p.split("\n"))
    .filter((p) => p.join("").trim().length > 0)
    .map((p) => parseParagraphLines(p));

  return {
    type: "cite",
    statement: paragraphs.length > 0 ? paragraphs : [[{ type: "text", value: "" }]],
    source,
    url,
  };
}

/** Plain-text excerpt helper (used for meta descriptions / HowTo extraction). */
export function markdownToPlainText(markdown: string, maxLength = 160): string {
  const blocks = parseMarkdown(markdown);
  const parts: string[] = [];
  const pushInline = (nodes: InlineNode[]) => parts.push(inlineText(nodes));
  for (const b of blocks) {
    if (b.type === "paragraph" || b.type === "heading") pushInline(b.children);
    else if (b.type === "list") b.items.forEach(pushInline);
    if (parts.join(" ").length >= maxLength) break;
  }
  return parts.join(" ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}
