"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-paper">
      <div className="text-center px-4">
        <h1 className="font-slab text-5xl lg:text-6xl font-bold text-ink mb-4">OOPS!</h1>
        <p className="font-slab text-muted text-lg mb-8 max-w-md mx-auto">
          Something went wrong. Please try again or contact us if the problem persists.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 font-mono-custom text-sm font-bold border-2 border-ink bg-accent text-white transition-colors hover:bg-white hover:text-accent hover:border-accent"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
