<a id="polski"></a>

[🇵🇱 Polski](#polski) | [🇬🇧 English](#english)

# ❄️ Klimax

![Next.js](https://img.shields.io/badge/Next.js_16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare_Tunnel-F38020?logo=cloudflare&logoColor=white)

> 🌐 **Strona na żywo:** [www.klimax.co.pl](https://www.klimax.co.pl/)

Klimax to strona firmowa lokalnej firmy instalacyjnej mojego taty ze Świebodzic: pompy ciepła, klimatyzacja, rekuperacja, ogrzewanie podłogowe oraz instalacje elektryczne i wod-kan. Strona powstała z maksymalną dbałością o SEO, żeby wypromować firmę w Google i zamieniać odwiedzających w telefony i zapytania.

> 🤖 Strona jest w 100% zvibecodowana.

## 🧠 Jak powstała

- **Vibe coding** — cały kod napisali agenci AI, a ja odpowiadałem za myślenie produktowe, architekturę, review i kierunek
- **Przemyślana struktura i instrukcje dla agentów** — `AGENTS.md` / `CLAUDE.md` z zasadami pracy, `PRODUCT.md` (odbiorcy, cel, pozycjonowanie) i `DESIGN.md` (system wizualny), dzięki którym agenci piszą spójny i prosty kod zamiast zgadywać
- **Design z Impeccable** — system wizualny, typografia, kolory i dopracowanie UX stworzone za pomocą dodatku [Impeccable](https://github.com/pbakaus/impeccable)
- **Automatyczny deploy na VPS** — każdy push na `main` uruchamia GitHub Actions, który buduje obraz Dockera i wdraża go przez SSH na VPS, wystawiony przez Cloudflare Tunnel z HTTPS i bez otwartych portów

## 🔎 SEO

- Osobne strony docelowe dla każdej usługi z branżowym FAQ
- `sitemap.xml`, `robots.txt`, metadane i obrazy Open Graph generowane dla każdej strony
- Lokalne SEO: obszar działania, godziny otwarcia i link do profilu firmy w Google
- Zoptymalizowane zdjęcia w odpowiednich rozmiarach i renderowanie po stronie serwera

## ✨ Funkcje

- Formularz kontaktowy z walidacją i wysyłką maili przez Resend
- Panel `/admin` chroniony hasłem do zarządzania galerią realizacji, z limitem prób logowania
- Galeria realizacji z lightboxem
- Widok dostosowany do telefonów

## 🛠️ Technologie

| Część | Technologie |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 |
| Backend | Next.js Route Handlers i Server Actions, Zod, Sharp, Resend |
| Infrastruktura | Docker, GitHub Actions, VPS, Cloudflare Tunnel |
| Design | Impeccable |

## 🚀 Jak uruchomić

1. Skopiuj `.env.example` do `.env` i uzupełnij potrzebne wartości.
2. Uruchom:

```bash
docker compose up --build
```

albo bez Dockera:

```bash
npm install && npm run dev
```

## 📁 Struktura

- `src/app/` — strony, w tym strony usług (`[service]`), FAQ, panel admina, API i sitemap
- `src/components/` — komponenty interfejsu
- `src/data/` — treści strony: usługi, FAQ, dane firmy
- `src/lib/` — logika pomocnicza
- `.github/workflows/deploy.yml` — automatyczne wdrożenie na VPS
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md` — instrukcje i kontekst dla agentów AI

---

<a id="english"></a>

[🇵🇱 Polski](#polski) | [🇬🇧 English](#english)

# ❄️ Klimax

> 🌐 **Live site:** [www.klimax.co.pl](https://www.klimax.co.pl/)

Klimax is the business website of my dad's local installation company in Świebodzice, Poland: heat pumps, air conditioning, heat recovery ventilation, underfloor heating, plus electrical and plumbing work. The site was built with maximum care for SEO, to promote the business on Google and turn visitors into phone calls and inquiries.

> 🤖 This website is 100% vibe-coded.

## 🧠 How it was built

- **Vibe coding** — all the code was written by AI agents, while I was responsible for product thinking, architecture, review and direction
- **Planned structure and agent instructions** — `AGENTS.md` / `CLAUDE.md` with working rules, `PRODUCT.md` (users, purpose, positioning) and `DESIGN.md` (visual system), so agents write consistent, simple code instead of guessing
- **Design with Impeccable** — the visual system, typography, colors and UX polish were created with the [Impeccable](https://github.com/pbakaus/impeccable) add-on
- **Automatic deployment to a VPS** — every push to `main` triggers GitHub Actions, which builds a Docker image and deploys it over SSH to a VPS, exposed through a Cloudflare Tunnel with HTTPS and no open ports

## 🔎 SEO

- Separate landing pages for each service with industry-specific FAQs
- `sitemap.xml`, `robots.txt`, metadata and Open Graph images generated for every page
- Local SEO: service area, opening hours and a link to the Google Business Profile
- Optimized, right-sized images and server-side rendering

## ✨ Features

- Contact form with validation and email delivery via Resend
- Password-protected `/admin` panel to manage the project gallery, with login rate limiting
- Project gallery with a lightbox
- Mobile-friendly layout

## 🛠️ Tech stack

| Part | Technologies |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 |
| Backend | Next.js Route Handlers and Server Actions, Zod, Sharp, Resend |
| Infrastructure | Docker, GitHub Actions, VPS, Cloudflare Tunnel |
| Design | Impeccable |

## 🚀 Getting started

1. Copy `.env.example` to `.env` and fill in the required values.
2. Run:

```bash
docker compose up --build
```

or without Docker:

```bash
npm install && npm run dev
```

## 📁 Project structure

- `src/app/` — pages, including service pages (`[service]`), FAQ, admin panel, API and sitemap
- `src/components/` — UI components
- `src/data/` — site content: services, FAQ, company details
- `src/lib/` — helper logic
- `.github/workflows/deploy.yml` — automatic deployment to the VPS
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md` — instructions and context for AI agents
