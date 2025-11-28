"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Mood", href: "/mood" },
    { name: "Breathing", href: "/breathing" },
    { name: "Articles", href: "/articles" },
    { name: "Hotline", href: "/hotline" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[var(--primary)]">
          MindEase
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[var(--primary)] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow animate-fade">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-[var(--primary)] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
