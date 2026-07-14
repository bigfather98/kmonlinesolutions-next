import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-paper">
      <div className="text-center px-4">
        <h1 className="font-slab text-5xl lg:text-6xl font-bold text-ink mb-4">404</h1>
        <p className="font-slab text-muted text-lg mb-8 max-w-md mx-auto">
          Page not found. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 font-mono-custom text-sm font-bold border-2 border-ink bg-accent text-white transition-colors hover:bg-white hover:text-accent hover:border-accent"
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
}
