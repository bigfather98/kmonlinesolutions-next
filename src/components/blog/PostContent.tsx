import MarkdownRenderer from "@/components/content/MarkdownRenderer";

/**
 * Receives the complete `body_markdown` document and passes it
 * through the custom renderer. Never queries MySQL.
 */
export default function PostContent({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-5 text-lg">
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
}
