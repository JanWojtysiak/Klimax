import type { Metadata } from "next";
import Link from "next/link";
import { getPhotos } from "@/lib/photos";
import { defaultTexts, getTexts } from "@/lib/texts";
import { isAdmin, login, logout, updateTexts, upload } from "./actions";
import { PhotoList } from "./PhotoList";
import { SubmitButton } from "./SubmitButton";

export const metadata: Metadata = {
  title: "Panel, Klimax",
  robots: { index: false, follow: false },
};

const field =
  "w-full border-2 border-stock/40 bg-transparent px-4 py-3 text-stock placeholder:text-stock/45 focus:border-stock focus:outline-none";
const button = "ink-btn bg-vermilion px-7 py-3 text-xl text-stock disabled:opacity-60";

export default async function AdminPage() {
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SECRET) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-20">
        <h1 className="display text-6xl">Panel</h1>
        <p className="mt-6 text-stock/80">
          Ustaw zmienne <code>ADMIN_PASSWORD</code> i <code>ADMIN_SECRET</code>, żeby włączyć panel.
        </p>
      </main>
    );
  }

  if (!(await isAdmin())) {
    return (
      <main className="mx-auto w-full max-w-md flex-1 px-5 py-20">
        <p className="caption text-xs text-stock/70">Klimax</p>
        <h1 className="display mt-3 text-6xl">Panel</h1>
        <form action={login} className="mt-10 flex flex-col gap-4">
          <label className="caption text-xs" htmlFor="password">
            Hasło
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className={field}
          />
          <SubmitButton pendingText="Sprawdzam…" className={button}>
            Wejdź
          </SubmitButton>
        </form>
      </main>
    );
  }

  const photos = await getPhotos();
  const texts = await getTexts();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-16 sm:px-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="caption text-xs text-stock/70">Klimax</p>
          <h1 className="display mt-3 text-6xl sm:text-7xl">Zdjęcia</h1>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3">
          <Link href="/" className="ink-btn bg-stock px-5 py-2 text-lg text-spruce">
            Strona główna
          </Link>
          <a
            href="/#gallery"
            target="_blank"
            className="caption text-xs text-stock/70 underline"
          >
            Podgląd galerii ↗
          </a>
          <form action={logout}>
            <button type="submit" className="caption text-xs text-stock/70 underline">
              Wyloguj
            </button>
          </form>
        </div>
      </div>

      <form
        action={upload}
        className="mt-10 grid gap-4 border-2 border-stock/25 p-5 sm:grid-cols-[1fr_1fr_auto] sm:items-end sm:p-7"
      >
        <label className="flex flex-col gap-2">
          <span className="caption text-xs">Pliki (JPG, PNG, WEBP)</span>
          <input
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            multiple
            required
            className="text-sm file:mr-4 file:border-0 file:bg-stock file:px-4 file:py-2 file:font-semibold file:text-spruce"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="caption text-xs">Opis (np. Pompa ciepła, Świdnica)</span>
          <input name="alt" maxLength={200} className={field} />
        </label>
        <SubmitButton pendingText="Wysyłam…" className={button}>
          Dodaj
        </SubmitButton>
      </form>

      <PhotoList key={photos.map((photo) => photo.file).join()} photos={photos} />
      <h2 className="display mt-20 text-5xl sm:text-6xl">Teksty</h2>
      <p className="mt-3 text-stock/70">
        Enter łamie linię. Puste pole przywraca tekst domyślny.
      </p>
      <form action={updateTexts} className="mt-8 flex flex-col gap-6">
        {Object.entries(defaultTexts).map(([key, { label }]) => (
          <label key={key} className="flex flex-col gap-2">
            <span className="caption text-xs">{label}</span>
            <textarea
              name={key}
              defaultValue={texts[key]}
              maxLength={2000}
              rows={texts[key].length > 80 ? 4 : 2}
              className={field}
            />
          </label>
        ))}
        <SubmitButton pendingText="Zapisuję…" className={`${button} self-start`}>
          Zapisz teksty
        </SubmitButton>
      </form>
    </main>
  );
}
