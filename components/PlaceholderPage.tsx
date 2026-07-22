import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
}

export function PlaceholderPage({
  title,
  description,
  icon,
  comingSoon = true,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        {comingSoon && (
          <span className="mt-6 inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Coming Soon
          </span>
        )}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
