import type { Faq } from "@/components/sections/FaqList";

export type ServicePage = {
  title: string;
  description: string;
  lead: string;
  scope: string[];
  brands?: boolean;
  faq: Faq[];
};

export const servicePages: Record<string, ServicePage> = {
  "pompy-ciepla": {
    title: "Pompy ciepła Świebodzice, Świdnica, Wałbrzych | Klimax",
    description:
      "Dobór, montaż i serwis pomp ciepła typu split i monoblok. Certyfikowany instalator, uprawnienia F-Gaz i SEP, 25 lat doświadczenia. Świebodzice i okolice do 30 km.",
    lead: "Dobieramy, montujemy i serwisujemy pompy ciepła w Świebodzicach, Świdnicy, Wałbrzychu i okolicy do 30 km. Hydraulikę, elektrykę i układ chłodniczy robi jedna firma z uprawnieniami SEP i F-Gaz.",
    scope: [
      "Dobór mocy i typu pompy do domu i instalacji",
      "Montaż pomp ciepła typu split i monoblok",
      "Podłączenie hydrauliczne i elektryczne",
      "Uruchomienie i regulacja",
      "Serwis",
    ],
    brands: true,
    faq: [
      {
        question: "Split czy monoblok?",
        answer:
          "W splicie czynnik chłodniczy krąży między jednostką zewnętrzną a wewnętrzną, więc połączenie musi wykonać instalator z certyfikatem F-Gaz. W monobloku cały układ chłodniczy jest fabrycznie zamknięty w jednostce zewnętrznej, a do domu płynie woda grzewcza, którą trzeba zabezpieczyć przed zamarznięciem. Najczęściej polecamy split, a monoblok tam, gdzie split nie wchodzi w grę.",
      },
      {
        question: "Od czego zależy zużycie prądu?",
        answer:
          "Najbardziej od temperatury wody, jaką pompa musi przygotować. Im niższa temperatura zasilania, tym wyższa sprawność: przykładowa pompa ma sezonowy współczynnik SCOP około 4,6 przy 35°C (ogrzewanie podłogowe) i około 3,2 przy 55°C (grzejniki). W kartach technicznych warto więc porównywać SCOP dla obu temperatur. Liczy się też ocieplenie domu i dobór mocy.",
      },
      {
        question: "Czy pompa ciepła jest głośna?",
        answer:
          "Dla zabudowy jednorodzinnej przepisy dopuszczają na granicy działki 50 dB w dzień i 40 dB w nocy. Liczy się hałas na granicy działki, a nie przy samym urządzeniu, dlatego miejsce ustawienia jednostki zewnętrznej planuje się przed montażem. Wiele pomp ma też tryb cichy na noc.",
      },
      {
        question: "Co zmienia się w przepisach o czynnikach chłodniczych?",
        answer:
          "Unijne rozporządzenie F-gazowe 2024/573 od 1 stycznia 2027 r. zakazuje wprowadzania na rynek nowych pomp ciepła split powietrze-woda do 12 kW z czynnikiem o GWP 150 lub wyższym, czyli między innymi na R32. Urządzenia już zamontowane można dalej używać i serwisować. Nowe modele przechodzą na czynniki o niskim GWP, na przykład R290 (propan).",
      },
      {
        question: "Jaki VAT na pompę ciepła z montażem?",
        answer:
          "Pompa kupiona razem z montażem w domu jednorodzinnym do 300 m² lub mieszkaniu do 150 m² jest zwykle objęta stawką VAT 8% zamiast 23%. Samo urządzenie kupione bez montażu to 23%.",
      },
    ],
  },
  klimatyzacja: {
    title: "Klimatyzacja Świebodzice, Świdnica, Wałbrzych | Klimax",
    description:
      "Montaż i przeglądy klimatyzacji z doborem mocy do metrażu. Certyfikat F-Gaz, 25 lat doświadczenia. Świebodzice, Świdnica, Wałbrzych i okolice do 30 km.",
    lead: "Montujemy klimatyzację i robimy jej przeglądy w Świebodzicach, Świdnicy, Wałbrzychu i okolicy do 30 km. Moc dobieramy do metrażu i nasłonecznienia.",
    scope: [
      "Dobór mocy do metrażu i nasłonecznienia",
      "Montaż jednostki wewnętrznej i zewnętrznej",
      "Zasilanie elektryczne i odprowadzenie skroplin",
      "Uruchomienie i sprawdzenie szczelności układu",
      "Przeglądy i czyszczenie",
    ],
    brands: true,
    faq: [
      {
        question: "Jaka moc klimatyzatora na ile metrów?",
        answer:
          "Punktem wyjścia jest około 0,1 kW mocy chłodniczej na 1 m² przy standardowej wysokości pomieszczenia (2,5–2,7 m), czyli około 3,5 kW na pokój 35 m². To tylko start: duże przeszklenia, okna na południe lub zachód, poddasze i słaba izolacja wymagają większej mocy.",
      },
      {
        question: "Czy klimatyzator może grzać?",
        answer:
          "Tak. Klimatyzator split to pompa ciepła powietrze-powietrze: w trybie grzania z 1 kWh prądu oddaje kilka kWh ciepła. Sprawdza się jako dogrzewanie wiosną i jesienią, a w dobrze ocieplonych pomieszczeniach także zimą.",
      },
      {
        question: "Kto może montować klimatyzację?",
        answer:
          "Klimatyzator split zawiera czynnik chłodniczy (F-gaz), więc montaż, uruchomienie i serwis układu może wykonać tylko osoba z certyfikatem F-Gaz, pracująca w firmie z certyfikatem dla przedsiębiorców. Od tego zależy też gwarancja producenta.",
      },
      {
        question: "Jak często robić przegląd klimatyzacji?",
        answer:
          "Co najmniej raz w roku, najlepiej przed sezonem. Jeśli klimatyzator zimą także grzeje, warto robić dwa przeglądy: wiosną i jesienią. Filtry jednostki wewnętrznej można czyścić samemu. Dokładne wymagania podaje producent w warunkach gwarancji.",
      },
      {
        question: "Czy w bloku potrzebna jest zgoda?",
        answer:
          "Tak. Jednostka zewnętrzna na elewacji, balkonie lub dachu to ingerencja w część wspólną budynku, więc przed montażem trzeba mieć zgodę wspólnoty albo spółdzielni. Warto ją załatwić jeszcze przed zakupem urządzenia.",
      },
      {
        question: "Co z czynnikiem R32?",
        answer:
          "Dzisiejsze klimatyzatory split pracują najczęściej na R32. Od 1 stycznia 2029 r. unijne przepisy zakazują wprowadzania na rynek nowych splitów powietrze-powietrze do 12 kW z czynnikiem o GWP 150 lub wyższym. Zakaz dotyczy sprzedaży nowych urządzeń, a zamontowane można dalej używać i serwisować.",
      },
      {
        question: "Jaki VAT na klimatyzację z montażem?",
        answer:
          "Klimatyzator kupiony razem z montażem w domu jednorodzinnym do 300 m² lub mieszkaniu do 150 m² jest zwykle objęty stawką VAT 8% zamiast 23%.",
      },
    ],
  },
  rekuperacja: {
    title: "Rekuperacja Świebodzice, Świdnica, Wałbrzych | Klimax",
    description:
      "Montaż rekuperacji, czyli wentylacji mechanicznej z odzyskiem ciepła. Świeże, filtrowane powietrze i mniejsze straty ciepła. Świebodzice i okolice do 30 km.",
    lead: "Montujemy rekuperację, czyli wentylację mechaniczną z odzyskiem ciepła, w Świebodzicach, Świdnicy, Wałbrzychu i okolicy do 30 km.",
    scope: [
      "Rozprowadzenie kanałów nawiewnych i wywiewnych",
      "Montaż centrali wentylacyjnej (rekuperatora)",
      "Czerpnia, wyrzutnia i anemostaty",
      "Uruchomienie i regulacja przepływów",
    ],
    faq: [
      {
        question: "Jak działa rekuperacja?",
        answer:
          "Centrala wyciąga zużyte powietrze z kuchni i łazienek, a do pokoi nawiewa świeże z zewnątrz. Oba strumienie mijają się w wymienniku: powietrze wywiewane oddaje ciepło nawiewanemu, ale się z nim nie miesza. Okna mogą zostać zamknięte, a powietrze i tak się wymienia.",
      },
      {
        question: "Ile ciepła odzyskuje rekuperator?",
        answer:
          "Producenci podają sprawność odzysku nawet do 90–95%. To wartość z warunków laboratoryjnych: w praktyce zależy od temperatury i wilgotności powietrza i bywa o kilkanaście punktów procentowych niższa. Mimo to większość ciepła, które przy wentylacji grawitacyjnej ucieka kominem, wraca do domu.",
      },
      {
        question: "Jak często wymieniać filtry?",
        answer:
          "Zwykle co 3–6 miesięcy, a w sezonie grzewczym i przy smogu częściej. Zapchane filtry to słabszy przepływ powietrza, głośniejsza praca i wyższe zużycie prądu. Wymiana trwa kilka minut i można ją zrobić samemu.",
      },
      {
        question: "Czy dom musi być szczelny?",
        answer:
          "Tak, bo przez nieszczelności powietrze ucieka z pominięciem wymiennika. Przepisy zalecają dla budynków z wentylacją mechaniczną szczelność n50 poniżej 1,5 wymiany powietrza na godzinę, a z grawitacyjną poniżej 3,0. Sprawdza się ją próbą ciśnieniową przy różnicy ciśnień 50 Pa.",
      },
      {
        question: "Kiedy najlepiej montować rekuperację?",
        answer:
          "W nowym domu przed tynkami i wylewkami, bo kanały chowa się w stropie, podłodze albo suficie podwieszanym. W domu już zamieszkanym też się da, ale kanały trzeba poprowadzić po poddaszu lub w zabudowie.",
      },
      {
        question: "Czy rekuperacja pomaga na smog i alergię?",
        answer:
          "Powietrze z zewnątrz przechodzi przez filtry, które zatrzymują kurz, pyłki i dużą część pyłów zawieszonych. Im dokładniejszy filtr, tym czystsze powietrze w domu, ale tym ważniejsza regularna wymiana.",
      },
    ],
  },
  "instalacje-elektryczne": {
    title: "Instalacje elektryczne Świebodzice, Świdnica, Wałbrzych | Klimax",
    description:
      "Wykonanie i modernizacja instalacji elektrycznych. Uprawnienia SEP 1, 2 i 3, 25 lat doświadczenia. Świebodzice, Świdnica, Wałbrzych i okolice do 30 km.",
    lead: "Wykonujemy i modernizujemy instalacje elektryczne w Świebodzicach, Świdnicy, Wałbrzychu i okolicy do 30 km. Mamy uprawnienia SEP w grupach 1, 2 i 3.",
    scope: [
      "Nowe instalacje elektryczne",
      "Modernizacja i wymiana starych instalacji",
      "Zasilanie pomp ciepła, klimatyzacji i rekuperacji",
      "Rozdzielnice i zabezpieczenia",
    ],
    faq: [
      {
        question: "Jak często kontrolować instalację elektryczną?",
        answer:
          "Prawo budowlane (art. 62) wymaga kontroli instalacji elektrycznej i piorunochronnej co najmniej raz na 5 lat, także w domu jednorodzinnym. Kontrola obejmuje między innymi pomiar rezystancji izolacji przewodów i sprawdzenie uziemień, a kończy się protokołem. O aktualny protokół może zapytać ubezpieczyciel po szkodzie.",
      },
      {
        question: "Kiedy wymienić starą instalację?",
        answer:
          "Sygnały ostrzegawcze to aluminiowe przewody, gniazda bez bolca ochronnego, bezpieczniki topikowe, wybijające zabezpieczenia i grzejące się gniazda. Stare instalacje projektowano pod kilka odbiorników, a nie pod płytę indukcyjną, pompę ciepła i klimatyzację naraz.",
      },
      {
        question: "Czy pompa ciepła wymaga osobnego obwodu?",
        answer:
          "Tak. Urządzenia o dużej mocy, jak pompa ciepła, klimatyzacja czy płyta indukcyjna, zasila się z osobnych obwodów z własnym zabezpieczeniem. Przed montażem warto sprawdzić moc przyłączeniową z umowy z dostawcą prądu, bo czasem trzeba ją zwiększyć.",
      },
      {
        question: "Po co wyłącznik różnicowoprądowy?",
        answer:
          "Odcina zasilanie, gdy prąd upływa poza obwód, na przykład przez ciało człowieka albo zawilgoconą izolację. Chroni przed porażeniem i ogranicza ryzyko pożaru. W nowych instalacjach jest standardem, w starych często go brakuje. Jego działanie sprawdza się przyciskiem TEST.",
      },
      {
        question: "Co oznaczają uprawnienia SEP?",
        answer:
          "To świadectwa kwalifikacyjne wymagane przy pracy z urządzeniami energetycznymi. Grupa 1 obejmuje urządzenia i instalacje elektryczne, grupa 2 urządzenia wytwarzające i zużywające ciepło, a grupa 3 urządzenia i instalacje gazowe. Świadectwa odnawia się co 5 lat.",
      },
    ],
  },
  "instalacje-wod-kan": {
    title: "Instalacje wod-kan Świebodzice, Świdnica, Wałbrzych | Klimax",
    description:
      "Instalacje wodne i kanalizacyjne: rozprowadzenie w nowych domach i wymiana starych rur. Świebodzice, Świdnica, Wałbrzych i okolice do 30 km.",
    lead: "Robimy instalacje wodne i kanalizacyjne: rozprowadzenie w nowych budynkach i wymiany starych rur. Świebodzice, Świdnica, Wałbrzych i okolica do 30 km.",
    scope: [
      "Rozprowadzenie zimnej i ciepłej wody",
      "Kanalizacja wewnętrzna",
      "Wymiana starych rur",
      "Podłączenie pompy ciepła i zasobnika ciepłej wody",
    ],
    faq: [
      {
        question: "Po co próba szczelności?",
        answer:
          "Zanim rury znikną pod tynkiem i wylewką, instalację napełnia się wodą i poddaje ciśnieniu wyższemu niż robocze: zwykle 1,5 raza, nie mniej niż około 9–10 barów. Ciśnienie nie może spadać, a na złączach nie może być wycieków ani zawilgoceń. Wynik zapisuje się w protokole.",
      },
      {
        question: "Jaki spadek musi mieć kanalizacja?",
        answer:
          "Poziome odcinki rur o średnicy 110 mm układa się zwykle ze spadkiem około 2% w stronę odpływu, czyli 2 cm na każdy metr. Za mały spadek kończy się zatorami, a za duży też szkodzi: woda ucieka, a zanieczyszczenia zostają w rurze.",
      },
      {
        question: "Kiedy wymienić stare rury?",
        answer:
          "Stalowe ocynkowane rury po kilkudziesięciu latach zarastają kamieniem i rdzą: spada ciśnienie, woda bywa rdzawa, pojawiają się przecieki. Dziś stosuje się rury z tworzyw i wielowarstwowe albo miedź, które nie rdzewieją.",
      },
      {
        question: "Jaką temperaturę powinna mieć ciepła woda?",
        answer:
          "Warunki techniczne wymagają, żeby instalacja dawała w kranach wodę o temperaturze 55–60°C i pozwalała okresowo przegrzać ją do co najmniej 70°C. Chodzi o bakterie Legionella, które namnażają się w letniej wodzie.",
      },
      {
        question: "Jakie ciśnienie wody jest prawidłowe?",
        answer:
          "Według warunków technicznych ciśnienie przed każdym kranem powinno mieścić się między 0,5 a 6 barów. Jeśli w sieci jest wyższe, montuje się reduktor ciśnienia, który chroni armaturę i urządzenia.",
      },
    ],
  },
  "ogrzewanie-podlogowe": {
    title: "Ogrzewanie podłogowe Świebodzice, Świdnica, Wałbrzych | Klimax",
    description:
      "Wykonanie wodnego ogrzewania podłogowego: pętle i rozdzielacz. Dobrze współpracuje z pompą ciepła. Świebodzice, Świdnica, Wałbrzych i okolice do 30 km.",
    lead: "Wykonujemy wodne ogrzewanie podłogowe: układamy pętle i montujemy rozdzielacz. Świebodzice, Świdnica, Wałbrzych i okolica do 30 km.",
    scope: [
      "Układanie pętli grzewczych",
      "Montaż rozdzielacza",
      "Podłączenie do pompy ciepła lub kotła",
      "Regulacja przepływów",
    ],
    faq: [
      {
        question: "Dlaczego podłogówka pasuje do pompy ciepła?",
        answer:
          "Bo pracuje na niskiej temperaturze wody, zwykle 30–40°C, a grzejniki potrzebują 45–55°C i więcej. Im niższa temperatura zasilania, tym mniej prądu zużywa pompa ciepła.",
      },
      {
        question: "Jaka temperatura podłogi jest bezpieczna?",
        answer:
          "Norma PN-EN 1264 przyjmuje maksymalnie 29°C w pomieszczeniach, w których się przebywa, 33°C w łazienkach i 35°C w strefach brzegowych, na przykład przy dużych przeszkleniach. Dla komfortu zaleca się średnio około 26°C.",
      },
      {
        question: "Jaka podłoga na ogrzewanie podłogowe?",
        answer:
          "Najlepiej przewodzą ciepło płytki i kamień. Panele, deska warstwowa i winyl też się nadają, o ile producent dopuszcza je na ogrzewanie podłogowe. Często stawia własny limit temperatury powierzchni, na przykład 27°C.",
      },
      {
        question: "Kiedy włączyć ogrzewanie po wylewce?",
        answer:
          "Najpierw jastrych trzeba wygrzać i spisać z tego protokół. Zwykle zaczyna się najwcześniej 21 dni po wylaniu jastrychu cementowego i 7 dni po anhydrytowym: przez 3 dni utrzymuje się wodę o temperaturze około 25°C, potem przez co najmniej 4 dni maksymalną temperaturę zasilania. Dokładne czasy podaje producent wylewki. Dopiero po wygrzaniu układa się posadzkę.",
      },
      {
        question: "Jak długa może być pętla?",
        answer:
          "Dla najczęściej stosowanej rury 16 mm bezpieczna długość jednej pętli to około 80–100 m. Dłuższe pętle mają za duże opory i grzeją nierówno, dlatego większe pomieszczenia dzieli się na kilka obiegów z rozdzielacza.",
      },
      {
        question: "Kiedy najlepiej robić podłogówkę?",
        answer:
          "W nowym domu przed wylewkami. W domu już zamieszkanym najlepiej latem, poza sezonem grzewczym.",
      },
    ],
  },
};
