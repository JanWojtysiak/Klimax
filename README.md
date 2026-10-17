This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Formularz kontaktowy

Formularz wysyła `POST /api/contact` (`src/app/api/contact/route.ts`). E-mail leci przez Resend, konfiguracja w `.env.local`:

```bash
RESEND_API_KEY=re_...
CONTACT_TO=biuro@klimax.co.pl
CONTACT_FROM="Formularz Klimax <formularz@klimax.co.pl>"
```

Bez `RESEND_API_KEY` zapytanie nie idzie mailem — ląduje w logach serwera. Domenę w `CONTACT_FROM` trzeba najpierw zweryfikować w Resend.

## Zdjęcia

Panel `/admin` pozwala dodawać i usuwać zdjęcia sekcji „Z realizacji”. Hasło i sekret ustaw w `.env` w katalogu głównym projektu:

```bash
ADMIN_PASSWORD=...
ADMIN_SECRET=...
```

`ADMIN_SECRET` wygeneruj np. przez `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`. Zmiana sekretu wylogowuje wszystkie sesje. Po 5 nieudanych logowaniach z jednego IP logowanie jest blokowane na godzinę.

Pliki trafiają do `uploads/` (zmienna `UPLOAD_DIR`), w produkcji to wolumen `uploads` z `compose.prod.yaml`. Bez zdjęć sekcja się nie wyświetla.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Produkcja (VPS)

1. Ustaw rekordy DNS `A` dla domeny i `www` na IP serwera.
2. Otwórz porty 80 i 443 na serwerze.
3. Utwórz `.env` na podstawie `.env.example` i ustaw `DOMAIN`, `ADMIN_PASSWORD`, `ADMIN_SECRET`.
4. Uruchom:

```bash
docker compose -f compose.prod.yaml up -d --build
```

Caddy sam pobiera i odnawia certyfikat HTTPS, przekierowuje `www` na domenę główną i przekazuje ruch do aplikacji. Aplikacja nie jest wystawiona bezpośrednio na zewnątrz.
