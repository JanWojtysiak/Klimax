import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/data/site";

export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="relative bg-spruce grain">
      <div className="relative mx-auto max-w-6xl px-5 py-6 sm:px-10">
        <Link href="/" className="inline-flex flex-col items-center">
          <Image
            src="/brand/logo-mark-winter.png"
            alt=""
            width={1039}
            height={341}
            sizes="(min-width: 640px) 11rem, 7rem"
            className="h-auto w-28 sm:w-44"
          />
          <span className="wordmark text-center text-[0.62rem] text-stock sm:text-sm">
            {site.name} · {site.owner}
          </span>
        </Link>

        <p className="caption mt-14 text-xs text-stock/70 sm:mt-20">
          <Link href="/" className="underline underline-offset-4 hover:text-stock">
            Strona główna
          </Link>{" "}
          › {title}
        </p>
        <h1 className="display mt-4 text-stock text-[clamp(2.6rem,9vw,6.5rem)]">{title}</h1>
        <div className="mt-6 max-w-2xl pb-14 text-lg leading-relaxed text-stock/85 sm:pb-20">{children}</div>
      </div>
    </header>
  );
}
