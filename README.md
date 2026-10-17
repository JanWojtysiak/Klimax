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

## Produkcja (Mikrus + Cloudflare Tunnel)

Mikrus nie ma własnego publicznego IPv4, więc ruch idzie przez tunel Cloudflare: kontener `cloudflared` sam łączy się z Cloudflare, HTTPS i przekierowanie z `www` obsługuje Cloudflare i Next.js. Na serwerze nie trzeba otwierać żadnych portów.

Obraz buduje GitHub Actions (`.github/workflows/deploy.yml`), bo `next build` nie mieści się w 1 GB RAM. Każdy push na `main` buduje stronę i wysyła ją na serwer.

`PORT` i `srvXX` poniżej są w mailu powitalnym od Mikrusa. Polecenia uruchamiaj w Git Bash.

### Jednorazowo

1. Dodaj domenę do Cloudflare (plan Free) i zmień serwery DNS u rejestratora na te podane przez Cloudflare. Sprawdź, czy Cloudflare przeniósł rekordy poczty (`MX`, `TXT`).
2. W Cloudflare: Zero Trust → Networks → Tunnels → Create tunnel → Cloudflared. Skopiuj token.
3. W tunelu dodaj dwa Public hostnames: `klimax.co.pl` i `www.klimax.co.pl`, oba typ `HTTP`, URL `klimax:3000`.
4. Na serwerze (Ubuntu 22.04 lub nowsze) zainstaluj Dockera: `curl -s https://raw.githubusercontent.com/unkn0w/noobs/main/scripts/chce_dockera.sh | bash`.
5. Wgraj `.env` na serwer (ustaw w nim `TUNNEL_TOKEN`, `ADMIN_PASSWORD`, `ADMIN_SECRET`, `RESEND_API_KEY`):

```bash
ssh -p PORT root@srvXX.mikr.us "mkdir -p klimax"
scp -P PORT .env root@srvXX.mikr.us:klimax/
```

6. Utwórz klucz SSH dla GitHuba i dodaj go na serwer:

```bash
ssh-keygen -t ed25519 -N "" -f klimax_deploy
ssh -p PORT root@srvXX.mikr.us "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys" < klimax_deploy.pub
```

7. Na GitHubie: Settings → Secrets and variables → Actions:
   - zakładka Secrets: `SSH_KEY` = zawartość pliku `klimax_deploy`,
   - zakładka Variables: `SSH_HOST` = `srvXX.mikr.us`, `SSH_PORT` = `PORT`.

   Potem usuń pliki `klimax_deploy` i `klimax_deploy.pub` z komputera.
8. Actions → Deploy → Run workflow, żeby wdrożyć pierwszy raz.

Dopóki `SSH_HOST` nie jest ustawione, workflow się nie uruchamia.

### Ręczne wdrożenie z komputera

```bash
docker build -t klimax . && docker save klimax | gzip | ssh -p PORT root@srvXX.mikr.us "gunzip | docker load && cd klimax && docker compose -f compose.prod.yaml up -d --no-build && docker image prune -f"
```
