"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import PhoneIcon from "./icons/PhoneIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { mainNav } from "@/content/navigation";
import { site, whatsappHref } from "@/content/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

/**
 * Full-screen menu for phones and tablets. Large links, with the phone and
 * WhatsApp buttons at the bottom. Escape or the header button closes it.
 * Opens and closes with an opacity + transform transition only.
 */
export default function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    // Stop the page behind the menu from scrolling while it is open.
    document.documentElement.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      // Sits below the header bar, so the header's menu button closes it.
      // `invisible` when closed so the links cannot be reached with Tab.
      className={`fixed inset-x-0 top-8 bottom-0 z-40 overflow-y-auto bg-ink transition-[opacity,transform] duration-300 xl:hidden ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <div className="content-width flex min-h-full flex-col pt-2 pb-6">
        <nav aria-label="Main">
          <ul className="flex flex-col">
            {mainNav.map((link, index) => {
              const isCurrent = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href} className="border-b border-sand/15">
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={onClose}
                    aria-current={isCurrent ? "page" : undefined}
                    className="flex min-h-7 items-center justify-between py-1 font-heading text-2xl"
                  >
                    {link.label}
                    {isCurrent && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-2 pt-6">
          <a
            href={site.phoneHref}
            className="flex min-h-7 items-center justify-center gap-1.5 rounded-control bg-accent-fill px-3 text-lg font-semibold text-on-accent"
          >
            <PhoneIcon className="h-3 w-3" />
            Call {site.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-7 items-center justify-center gap-1.5 rounded-control border border-sand/70 px-3 text-lg font-semibold"
          >
            <WhatsAppIcon className="h-3 w-3" />
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}
