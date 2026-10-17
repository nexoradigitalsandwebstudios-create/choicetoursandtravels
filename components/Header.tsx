"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";
import PhoneIcon from "./icons/PhoneIcon";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";

/**
 * Site header. Transparent over the dark hero at the top of every page, then
 * solid ink once you scroll down.
 *
 * How it knows you have scrolled, without a scroll listener: the root layout
 * places an invisible 96px-tall "#top-sentinel" at the very top of the page.
 * An IntersectionObserver tells us when that strip leaves the screen.
 */
export default function Header() {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (sentinel === null) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsSolid(!entry.isIntersecting);
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // useCallback keeps this the same function between renders, so the menu's
  // effect (which depends on it) does not re-run every time the header renders.
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    // Text is always sand: the header sits on a dark hero, then on solid ink.
    // The focus ring is switched to sand too so it shows on the dark background.
    <header className="fixed inset-x-0 top-0 z-50 text-sand [--focus-ring:var(--sand)]">
      {/* The solid background fades in with opacity (cheap to animate)
          rather than by animating background-color. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-ink transition-opacity duration-300 ${
          isSolid || menuOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="content-width relative flex h-8 items-center justify-between gap-2 lg:h-9">
        <Logo onClick={() => setMenuOpen(false)} />

        {/* Full menu only on wide screens (1280px+), where it fits beside the
            logo on one line; narrower screens use the menu button. */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-3">
            {mainNav.map((link) => {
              const isCurrent = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`inline-flex min-h-6 items-center border-b-2 text-base font-medium whitespace-nowrap ${
                      isCurrent ? "border-accent" : "border-transparent hover:border-sand/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-6 min-w-6 items-center justify-center gap-1 rounded-control bg-accent-fill px-2 font-semibold text-on-accent hover:opacity-90"
          >
            <PhoneIcon className="h-2.5 w-2.5" />
            <span className="hidden whitespace-nowrap sm:inline">Call us</span>
            <span className="sr-only sm:hidden">Call us</span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex min-h-6 min-w-6 items-center justify-center rounded-control xl:hidden"
          >
            {menuOpen ? <CloseIcon className="h-3 w-3" /> : <MenuIcon className="h-3 w-3" />}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </header>
  );
}
