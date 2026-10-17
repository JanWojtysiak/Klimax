import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-stock text-spruce">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="caption text-xs">
          {site.name} · {site.owner}
        </p>
        <p className="text-sm text-spruce/75">
          {site.city} ·{" "}
          <a href={site.phoneHref} className="underline underline-offset-4">
            {site.phone}
          </a>{" "}
          ·{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
