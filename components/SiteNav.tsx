"use client";

import { useEffect, useRef, useState } from "react";

type Item = { label: string; href: string };

export default function SiteNav({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[96rem] items-center justify-between px-6 sm:h-20 lg:px-12"
      >
        <a
          href="#home"
          className="font-display text-2xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          Piyush<span className="text-dim">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative inline-block py-2 text-sm text-mute transition-colors duration-300 hover:text-fg"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0.5 h-px origin-left scale-x-0 bg-fg transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-line-strong px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-white/5 md:block"
        >
          Let’s Talk
        </a>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 hover:bg-white/5 md:hidden"
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-px w-5 bg-fg transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-fg transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-fg transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ink px-6 py-8 md:hidden"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-3xl tracking-tight text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
