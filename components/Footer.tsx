import Link from "next/link";
import { navLinks } from "@/lib/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
                FC
              </span>
              FolsomChat
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The digital home for the Folsom, California community. Connect
              with neighbors and discover what makes our city special.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">About Folsom</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Folsom is a vibrant city in Sacramento County, known for Folsom
              Lake, the historic district, and a thriving community spirit.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {currentYear} FolsomChat. Built for the Folsom community.
        </div>
      </div>
    </footer>
  );
}
