"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Route } from "next";

const primaryLinks: Array<{ href: Route; label: string }> = [
  { href: "/" as Route, label: "Home" },
  { href: "/about" as Route, label: "About" },
  { href: "/services" as Route, label: "Services" },
  { href: "/products" as Route, label: "Products" },
  { href: "/projects" as Route, label: "Projects" },
  { href: "/contact" as Route, label: "Contact" },
];

const mobileMenuItems = [
  ...primaryLinks,
  { href: "/request-quotation" as Route, label: "Request Quotation" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
              src="/images/P & L logo.jpeg"
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-[380px] overflow-hidden rounded-l-[28px] border-l border-white/10 bg-[#0B1F3A]/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-brand-amber">
                  Menu
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-white">
                  Explore P & L Above Heights
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 space-y-3">
              {mobileMenuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center rounded-[18px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition hover:border-brand-blue hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
