# Design

<!-- impeccable:design-schema 1 -->

## Direction contract — SEZON

**THESIS.** Strona jest serią plakatów sitodrukowych, a jej dowodem jest przedruk sezonowy: ta sama scena w mrozie i w lecie, pompa grzeje w obu. Odmawia układu „hero ze zdjęciem urządzenia w ogrodzie + siatka kart usług".

**OWN-WORLD.** Pięć płaskich farb z ziarnem druku, świerkowa czerń jako łoże, wermilion wyłącznie na ciepło. Ciężkie wersaliki `Big Shoulders` w skali plakatowej, pasy podpisu na całą szerokość, podwójne linijki z rombem, załamany róg jako stan aktywny. Zero zaokrągleń, cieni i szkła.

**STORY.** Właściciel domu pod Świebodzicami rozumie w pierwszym ekranie, że Klimax montuje pompy ciepła u niego w okolicy; widzi, że instalacja pracuje przez cały rok; sprawdza uprawnienia i zasięg dojazdu; dzwoni.

**FIRST VIEWPORT.** Krajobraz sudecki spłaszczony do płaszczyzn: łupkowe niebo, klif po prawej, pas świerków, śnieg z niezadrukowanego papieru, dom po lewej, a przy jego ścianie wermilionowa pompa — jedyny ciepły obiekt na arkuszu. „POMPY CIEPŁA" wybite na niebie, pas podpisu u dołu z zasięgiem i telefonem jako akcją główną.

**FORM.** Plakat parkowy WPA (`posters-covers-sleeves-wpa-park-poster`), wylosowany jako challenger i wybrany przez użytkownika ponad przypisany kierunek (izometria, pozycja 3 listy), seed `eb13c6ee`. Staging: własny, stos pełnoekranowych arkuszy — aperture-projection odrzucony jako niezgodny z drukiem.

## Visual world

Seria plakatów sitodrukowych. Strona nie jest dokumentem z sekcjami — jest stosem ponumerowanych arkuszy z jednej serii wydawniczej. Każdy arkusz niesie jedno hasło, jeden obraz i jeden pas podpisu. Krajobraz jest zawsze spłaszczony do płaskich płaszczyzn farby; nie ma gradientów, cieni ani głębi fotograficznej w ilustracji.

Anty-referencja: strona firmy instalacyjnej z niebieskim gradientem, siatką kart usług z ikonkami, szarym paskiem logotypów i licznikiem „25+ lat".

## Inks

Pięć farb. Jeden arkusz używa najwyżej czterech.

| Rola | Token | Wartość |
|---|---|---|
| Papier / śnieg | `--color-stock` | `#EFE9DA` |
| Świerk (najciemniejsza farba, tło strony) | `--color-spruce` | `#16332B` |
| Łupek sudecki (niebo zimowe) | `--color-slate` | `#2E5567` |
| Wermilion (wyłącznie ciepło) | `--color-vermilion` | `#D8452A` |
| Ochra (ziemia letnia) | `--color-ochre` | `#C0803A` |

Zasady:

- Wermilion jest zarezerwowany dla ciepła: jednostka pompy ciepła, temperatura, akcja główna. Nic innego nie jest wermilionowe.
- Śnieg to niezadrukowany papier, nie biała farba. Biel `#FFFFFF` nie istnieje w systemie.
- Kolor obejmuje całe pola, nigdy akcenty rozsypane po neutralnym tle. Każdy arkusz ma jedną farbę dominującą.
- Strona przeplata arkusze ciemne (świerk, łupek) i jasne (papier). Dwa jasne arkusze nie stoją obok siebie.

## Type

- Display: `Big Shoulders` (zmienny, `opsz` + `wght`), wersaliki, waga 800–900, tracking `-0.02em`. Uwaga: rodzina `Big Shoulders Display` została przez Google scalona w `Big Shoulders` — stara nazwa nie działa w `next/font/google`.
- Tekst: `Public Sans` (zmienny), 400–600.
- Oba kroje ładowane z podzbiorem `latin-ext` — bez tego nie składają się Ł, Ś, Ą, Ż.
- Jedno hasło na arkusz. Nagłówki wyłącznie wersalikami; tekst bieżący nigdy wersalikami.
- Display schodzi poniżej progu 6rem tylko poza arkuszami; na arkuszu skala plakatowa (do ~12rem) jest regułą świata, nie wyjątkiem.

## Print material

- Ziarno druku: jedna nakładka `feTurbulence` w `mix-blend-mode: multiply`, niskie krycie. Nakładana na płaszczyzny farby, nigdy na tekst bieżący.
- Linijki: podwójna hairline z rombem pośrodku jako separator arkuszy.
- Pas podpisu: pełna szerokość arkusza, farba świerkowa, liternictwo papierowe.
- Stan aktywny przycisku: załamany róg (registracja sitodruku), nie cień i nie zmiana krycia.
- Zero zaokrągleń powyżej 2px, zero cieni rzuconych, zero szkła i rozmycia.

## Motion

Jeden autorski moment: **przedruk sezonowy**. Ta sama scena, przypięta na czas przewijania, zmienia farby z zimowych na letnie. Krawędzie płaszczyzn nie ruszają się ani o piksel — zmienia się wyłącznie `fill`. Wermilionowa pompa nie zmienia farby w żadnym sezonie; to jest argument produktowy zagrany jako materiał.

Poza tym: subtelna paralaksa płaszczyzn hero. Nic więcej. Żadnych wejść sekcji.

Wszystkie ruchy respektują `prefers-reduced-motion`: przedruk staje się natychmiastowy, paralaksa znika.

## Content rules

- Zero wymyślonych opinii, liczby realizacji, nagród i cen. PRODUCT.md jest jedynym źródłem faktów.
- Marki i uprawnienia występują wyłącznie jako typografia. Logotypy producentów nie są używane.
- Mapa pokazuje wyłącznie terytorium (pasma odległości), nigdy piny konkretnych realizacji.
- Materiały zastępcze muszą być widocznie oznaczone jako niedostarczone.
