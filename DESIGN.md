# Design

<!-- impeccable:design-schema 1 -->

## Direction contract — SEZON

**THESIS.** Strona jest serią plakatów sitodrukowych, a jej dowodem jest przedruk sezonowy: ta sama scena w mrozie i w lecie, pompa grzeje w obu. Odmawia układu „hero ze zdjęciem urządzenia w ogrodzie + siatka kart usług".

**OWN-WORLD.** Pięć płaskich farb z ziarnem druku, świerkowa czerń jako łoże, wermilion wyłącznie na ciepło. Ciężkie wersaliki `Big Shoulders` w skali plakatowej, pasy podpisu na całą szerokość, podwójne linijki z rombem, załamany róg jako stan aktywny. Zero zaokrągleń, cieni i szkła.

**STORY.** Właściciel domu pod Świebodzicami rozumie w pierwszym ekranie, że Klimax montuje pompy ciepła u niego w okolicy; widzi, że instalacja pracuje przez cały rok; sprawdza uprawnienia i zasięg dojazdu; dzwoni.

**FIRST VIEWPORT.** Krajobraz sudecki spłaszczony do płaszczyzn: łupkowe niebo, klif po prawej, pas świerków, śnieg z niezadrukowanego papieru, dom po lewej, a przy jego ścianie wermilionowa pompa — jedyny ciepły obiekt na arkuszu. „POMPY CIEPŁA" wybite na niebie, pas podpisu u dołu z zasięgiem i telefonem jako akcją główną. Arkusz 01 jest jednocześnie serią sześciu odbitek: strzałki wymieniają płytę usługi, a krajobraz zostaje w rejestrze co do piksela.

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

- Wermilion jest zarezerwowany dla czynnej instalacji: obiekt aktywnej usługi na arkuszu 01 (pompa, klimatyzator, rekuperator, rozdzielnica, piony wod-kan, płyta podłogówki), temperatura, akcja główna. Nic innego nie jest wermilionowe. Krajobraz i budynek nigdy nie dostają tej farby — dostaje ją wyłącznie to, co Klimax montuje.
- Śnieg to niezadrukowany papier, nie biała farba. Biel `#FFFFFF` nie istnieje w systemie.
- Kolor obejmuje całe pola, nigdy akcenty rozsypane po neutralnym tle. Każdy arkusz ma jedną farbę dominującą.
- Strona przeplata arkusze ciemne (świerk, łupek) i jasne (papier).
- Sąsiadujące arkusze nigdy nie dzielą farby dominującej — ani dwa jasne, ani dwa ciemne. Ostatnie pole arkusza i pierwsze pole następnego muszą być w różnych farbach.
- Krawędź arkusza jest zdarzeniem drukarskim: zmiana farby albo pełnoszerokościowa podwójna linijka z rombem (`.rule-diamond`). Nigdy nic.
- Jasne pole poniżej 200 px wysokości między dwoma polami farby nie jest arkuszem, tylko okrawkiem. Albo je rozbuduj, albo usuń, a treść przenieś do sąsiedniego arkusza.

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

Dwa autorskie momenty, oba z tej samej metafory: arkusz zostaje na prasie, wymienia się farba albo płyta.

**Przedruk sezonowy** (przewijanie). Ta sama scena, przypięta na czas przewijania, zmienia farby z zimowych na letnie. Krawędzie płaszczyzn nie ruszają się ani o piksel — zmienia się wyłącznie `fill`. Wermilionowa instalacja nie zmienia farby w żadnym sezonie; to jest argument produktowy zagrany jako materiał.

**Wymiana płyty** (strzałki usług). Krajobraz jest płytą podkładową i nie drgnie. Rusza się wyłącznie płyta wermilionowa i jej podpis:

- Hasło i podpis odsłania twarda krawędź przechodząca w stronę strzałki — ruch rakla, `linear`, 400 ms. Nigdy przenikanie.
- Nowe hasło przyjeżdża z wermilionowym duchem przesuniętym o kilka pikseli, który wskakuje w rejestr i znika — poprawiona pasówka, 520 ms, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Obiekt usługi wjeżdża w scenę wzdłuż osi rejestru, 560 ms, ta sama krzywa. Poprzednia płyta jest zdejmowana cięciem, nie wygaszana.

Poza tym: subtelna paralaksa płaszczyzn hero. Nic więcej. Żadnych wejść sekcji.

Wszystkie ruchy respektują `prefers-reduced-motion`: przedruk i wymiana płyty stają się natychmiastowe, duch pasówki nie powstaje, paralaksa znika.

## Content rules

- Zero wymyślonych opinii, liczby realizacji, nagród i cen. PRODUCT.md jest jedynym źródłem faktów.
- Uprawnienia niosą wyłącznie typografia i stemple. Marki na liście producentów niosą logotypy — zawsze jako sylwetki w farbach serii (maska alfa + `currentColor`), nigdy w firmowych kolorach. Lista jest odbita w dwóch farbach, bez żadnych pól tła: marka wiodąca dostaje obie farby naraz — kaligraficzne szlaufy i ® idą ochrą, litery papierem — a niżej lewa kolumna idzie papierem, prawa ochrą. Najazd na wiersz wiodący wymienia farby miejscami zamiast kłaść płytę. Skalują się w `em`, więc trzymają rytm składu. Nazwa marki zostaje w kodzie jako `sr-only`, każdy wiersz linkuje do producenta, a najazd odwraca płytę: papier pod spodem, świerkowa farba na wierzchu.
- Mapa pokazuje wyłącznie terytorium (pasma odległości), nigdy piny konkretnych realizacji.
- Materiały zastępcze muszą być widocznie oznaczone jako niedostarczone.
