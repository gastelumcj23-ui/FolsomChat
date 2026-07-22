export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/directory", label: "Directory" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
