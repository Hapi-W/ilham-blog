"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Profil" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/gallery", label: "Galeri" },
  { href: "/blog", label: "Jurnal" },
  { href: "/confess", label: "Curhat" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[#e0ddd6] bg-[#f7f5f0] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Ilham Majedi
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[11px] tracking-[0.16em] uppercase transition-colors ${
                pathname === l.href
                  ? "text-[#0a0a0a]"
                  : "text-[#888] hover:text-[#0a0a0a]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-[#0a0a0a] transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#0a0a0a] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#0a0a0a] transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e0ddd6] bg-[#f7f5f0] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[12px] tracking-[0.16em] uppercase ${
                pathname === l.href ? "text-[#0a0a0a]" : "text-[#888]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
