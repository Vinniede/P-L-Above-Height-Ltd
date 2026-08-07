"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { createPortal } from "react-dom";

const primaryLinks: Array<{ href: Route; label: string }> = [
  { href: "/" as Route, label: "Home" },
  { href: "/about" as Route, label: "About" },
  { href: "/services" as Route, label: "Services" },
  { href: "/products" as Route, label: "Products" },
  { href: "/projects" as Route, label: "Projects" },
  { href: "/contact" as Route, label: "Contact" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? "navbar-full navbar-scrolled" : "navbar-full"}`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-6 sm:h-[80px] lg:h-[90px] lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-4 overflow-hidden text-white"
          aria-label="P & L Above Heights homepage"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm"
          >
            <Image
              src="/images/p-and-l-logo.jpeg"
              alt="P & L logo"
              fill
              className="object-contain p-1"
              priority
            />
          </motion.div>
          <div className="min-w-0">
            <p className="nav-brand-gradient truncate font-display text-lg font-semibold uppercase tracking-[0.04em] sm:text-xl">
              P & L ABOVE HEIGHTS LTD
            </p>
            <p className="mt-1 truncate text-[10px] uppercase tracking-[0.32em] text-slate-300">
              Building Strength. Securing the Future.
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 min-w-0 items-center justify-center lg:flex">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {primaryLinks.map((link) => {
              const active = isActive(link.href as string, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link group whitespace-nowrap ${active ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/request-quotation"
            className="nav-button inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F58220] to-[#FFC72C] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(245,130,32,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_75px_rgba(245,130,32,0.32)]"
          >
            Request Quotation
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 text-white transition duration-300 hover:bg-white/20 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 h-1 ${scrolled ? "opacity-100" : "opacity-60"} bg-gradient-to-r from-transparent via-[#F58220] to-transparent transition-opacity duration-300`}
      />

      {mounted && createPortal(
        <div className="lg:hidden">
          <div className={`fixed inset-0 z-[70] bg-slate-950/55 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMobileOpen(false)} />
          <aside className={`fixed right-3 top-[76px] z-[80] w-[min(80vw,280px)] rounded-[18px] border border-white/15 bg-[#0B1F3A]/95 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300 ${mobileOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`} aria-hidden={!mobileOpen} aria-label="Mobile navigation">
            <div className="mb-1 flex items-center justify-between px-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-amber">Navigate</p>
              <button type="button" onClick={() => setMobileOpen(false)} className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white active:scale-90" aria-label="Close mobile menu"><X className="h-4 w-4" /></button>
            </div>
            <nav className="space-y-1" aria-label="Mobile navigation links">
              {primaryLinks.map((item) => {
                const active = isActive(item.href as string, pathname);
                return <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className={`flex w-full items-center rounded-lg px-3 py-2 text-sm font-semibold transition duration-200 active:scale-[0.98] ${active ? "bg-gradient-to-r from-[#F58220] to-[#F5A623] text-white shadow-[0_8px_20px_rgba(245,130,32,0.25)]" : "text-white/85 hover:bg-white/10 hover:pl-4 hover:text-white"}`}>{item.label}</Link>;
              })}
            </nav>
          </aside>
        </div>, document.body,
      )}    </header>
  );
}
