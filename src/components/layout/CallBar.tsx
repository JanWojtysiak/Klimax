import { site } from "@/data/site";

export function CallBar() {
  return (
    <div className="sticky bottom-0 z-40 bg-vermilion md:hidden">
      <a
        href={site.phoneHref}
        className="ink-btn w-full px-5 py-4 text-xl text-stock"
      >
        Zadzwoń {site.phone}
      </a>
    </div>
  );
}
