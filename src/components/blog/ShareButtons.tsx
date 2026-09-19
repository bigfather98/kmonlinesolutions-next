"use client";

import { useState } from "react";

export type SharePlatform = "facebook" | "x" | "linkedin" | "reddit" | "copy";

interface ShareButtonsProps {
  url: string;
  title: string;
  platforms?: SharePlatform[];
}

const PLATFORM_LABELS: Record<SharePlatform, string> = {
  facebook: "Facebook",
  x: "X",
  linkedin: "LinkedIn",
  reddit: "Reddit",
  copy: "Copy Link",
};

function shareHref(platform: SharePlatform, url: string, title: string): string | null {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    case "x":
      return `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
    case "reddit":
      return `https://www.reddit.com/submit?url=${u}&title=${t}`;
    case "copy":
      return null;
  }
}

export default function ShareButtons({
  url,
  title,
  platforms = ["facebook", "x", "linkedin", "reddit", "copy"],
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 border-y-2 border-ink py-5">
      <p className="mb-3 font-mono-custom text-xs font-bold tracking-widest text-muted uppercase">
        Share this article
      </p>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => {
          const href = shareHref(platform, url, title);
          const label =
            platform === "copy" && copied ? "Copied!" : PLATFORM_LABELS[platform];
          const className =
            "border-2 border-ink bg-paper px-4 py-2 font-mono-custom text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-paper";
          return href ? (
            <a
              key={platform}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {label}
            </a>
          ) : (
            <button key={platform} type="button" onClick={copyLink} className={className}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
