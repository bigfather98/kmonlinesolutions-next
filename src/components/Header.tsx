"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/samples", label: "SAMPLES" },
  { href: "/pricing", label: "PRICING" },
];

function NavIcon({ href, className }: { href: string; className?: string }) {
  switch (href) {
    case "/":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "/services":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "/samples":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      );
    case "/pricing":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (menuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    } else if (!menuOpen && toggleRef.current) {
      toggleRef.current.focus();
    }
  }, [menuOpen]);

  return (
    <>
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col border-r-2 border-ink bg-paper z-50">
        <div className="p-6 border-b-2 border-ink">
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="KM Online Solutions"
              width={160}
              height={53}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        <nav className="flex-1 p-4 pt-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-mono-custom font-bold border-2 transition-colors ${
                  isActive
                    ? "bg-accent text-white border-accent"
                    : "bg-transparent text-muted border-transparent hover:border-ink hover:text-ink"
                }`}
              >
                <NavIcon
                  href={link.href}
                  className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-muted"}`}
                />
                <span className={isActive ? "text-white" : ""}>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t-2 border-ink space-y-3">
          <Link
            href="/contact-us"
            className="block w-full px-4 py-3 text-center text-sm font-mono-custom font-bold border-2 border-ink bg-accent text-white transition-colors hover:bg-white hover:text-accent hover:border-accent"
          >
            CONTACT US
          </Link>
          <p className="text-xs font-mono-custom text-muted text-center">
            {SITE.email}
          </p>
        </div>
      </aside>

      <div className="md:hidden fixed top-0 left-0 right-0 z-50 border-b-2 border-ink bg-paper">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex justify-center w-32">
            <Image
              src="/images/logo.png"
              alt="KM Online Solutions"
              width={140}
              height={47}
              className="h-auto"
            />
          </Link>
          <button
            ref={toggleRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border-2 border-ink"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-paper pt-16"
          >
                <nav className="p-4 space-y-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 text-sm font-mono-custom font-bold border-2 ${
                    pathname === link.href
                      ? "bg-accent text-white border-accent"
                      : "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  <NavIcon
                    href={link.href}
                    className={`w-4 h-4 shrink-0 ${
                      pathname === link.href ? "text-white" : "text-ink"
                    }`}
                  />
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-4 text-sm font-mono-custom font-bold text-center border-2 border-ink bg-accent text-white hover:bg-white hover:text-accent hover:border-accent mt-6"
              >
                CONTACT US
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t-2 border-ink bg-paper">
        <Link
          href="/samples"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-r-2 border-ink font-mono-custom text-xs font-bold text-ink hover:bg-accent hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
          </svg>
          SAMPLES
        </Link>
        <Link
          href="/contact-us"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 font-mono-custom text-xs font-bold bg-accent text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          GET A QUOTE
        </Link>
      </div>

      <a
        href="https://m.me/522285660969539"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 md:hidden w-14 h-14 border-2 border-ink bg-accent flex items-center justify-center hover:bg-white hover:text-accent transition-colors"
        aria-label="Message us on Facebook"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.9 6.6 4.9 8.3L7 22l2.5-1.2c1.6.5 3.3.8 5.1.8 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.1 13.4L15 14.3c-.3-.3-.7-.3-1 0l-1.6 1.6c-.1.1-.2.1-.3 0l-3.6-3.6c-.1-.1-.1-.2 0-.3l1.6-1.6c.3-.3.3-.7 0-1L8.6 7.9c-.3-.3-.7-.3-1 0l-1.4 1.4c-.5.5-.6 1.2-.3 1.7l4.3 5.1c.3.4.7.7 1.2.9.4.2.8.3 1.2.3.5 0 .9-.1 1.3-.4l2.1-1.5c.3-.2.4-.6.2-.9-.1-.4-.3-.5-.5-.6z" />
        </svg>
      </a>
    </>
  );
}
