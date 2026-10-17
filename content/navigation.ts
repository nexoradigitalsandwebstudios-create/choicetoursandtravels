// Main menu links, used by the header, the mobile menu and the footer.

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Devotional journeys", href: "/devotional" },
  { label: "Tour packages", href: "/tours" },
  { label: "Our fleet", href: "/fleet" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
