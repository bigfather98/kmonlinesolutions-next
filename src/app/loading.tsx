export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-paper">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-ink border-t-accent rounded-full animate-spin mx-auto" />
        <p className="font-mono-custom text-xs text-muted mt-4 tracking-widest">Loading...</p>
      </div>
    </div>
  );
}
