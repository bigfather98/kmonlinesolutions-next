export function formatPostDate(value: Date | string | null): string {
  if (!value) return "";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Manila",
  });
}

export function formatReadingTime(minutes: number | null): string | null {
  if (!minutes || minutes <= 0) return null;
  return `${minutes} min read`;
}
