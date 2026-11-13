import type { Faq } from "@/components/sections/FaqList";

export type CityPage = {
  service: string;
  city: string;
  title: string;
  description: string;
  lead: string;
  local: string[];
  faq: Faq[];
};

export const cityPages: Record<string, CityPage> = {
  "klimatyzacja-swidnica": {
    service: "klimatyzacja",
    city: "Świdnica",
    title: "Klimatyzacja Świdnica – montaż i serwis | Klimax",
    description:
      "Montaż i przeglądy klimatyzacji w Świdnicy: domy, mieszkania w blokach i kamienice. Certyfikat F-Gaz, 25 lat doświadczenia. Dojazd ze Świebodzic, do 10 km.",
    lead: "Montujemy klimatyzację i robimy jej przeglądy w Świdnicy. To nasza najbliższa strefa dojazdu: do 10 km od siedziby w Świebodzicach.",
    local: [
      "W blokach, na przykład na Osiedlu Młodych i Zawiszowie, jednostka zewnętrzna trafia zwykle na balkon albo elewację. To część wspólna budynku, więc przed montażem potrzebna jest zgoda spółdzielni lub wspólnoty.",
      "W kamienicach w zabytkowym centrum Świdnicy trzeba sprawdzić jeszcze jedno: czy budynek jest objęty ochroną konserwatorską. Jeśli tak, urządzenie na elewacji może wymagać także zgody konserwatora zabytków.",
    ],
    faq: [
      {
        question: "Czy dojeżdżacie do Świdnicy?",
        answer:
          "Tak. Świdnica leży w naszej najbliższej strefie dojazdu, do 10 km od siedziby w Świebodzicach. Dojeżdżamy też do okolicznych miejscowości, między innymi do Jaworzyny Śląskiej, Żarowa i Marcinowic.",
      },
      {
        question: "Kamienica w centrum Świdnicy: jakie zgody są potrzebne?",
        answer:
          "Zawsze zgoda wspólnoty, bo elewacja to część wspólna. Jeśli budynek jest wpisany do rejestru zabytków, umieszczenie na nim urządzenia technicznego, czyli także jednostki zewnętrznej klimatyzatora, wymaga dodatkowo pozwolenia wojewódzkiego konserwatora zabytków. Zgody warto załatwić przed zakupem urządzenia.",
      },
      {
        question: "Blok w Świdnicy: gdzie zamontować jednostkę zewnętrzną?",
        answer:
          "Najczęściej na balkonie albo na elewacji przy balkonie, zgodnie z tym, na co pozwala spółdzielnia lub wspólnota. Trzeba też zaplanować odprowadzenie skroplin, żeby woda nie kapała na balkon sąsiada.",
      },
    ],
  },
  "klimatyzacja-walbrzych": {
    service: "klimatyzacja",
    city: "Wałbrzych",
    title: "Klimatyzacja Wałbrzych – montaż i serwis | Klimax",
    description:
      "Montaż i przeglądy klimatyzacji w Wałbrzychu: Podzamcze, Piaskowa Góra, Szczawienko, Śródmieście i pozostałe dzielnice. Certyfikat F-Gaz, dojazd ze Świebodzic.",
    lead: "Montujemy klimatyzację i robimy jej przeglądy w Wałbrzychu. Miasto leży w strefie 10–20 km od naszej siedziby w Świebodzicach, a najbliżej mamy do Szczawienka, Podzamcza i Piaskowej Góry.",
    local: [
      "Na Podzamczu i Piaskowej Górze dominują bloki. Jednostka zewnętrzna trafia tam zwykle na balkon lub loggię, a przed montażem potrzebna jest zgoda spółdzielni albo wspólnoty.",
      "W kamienicach w Śródmieściu, na Białym Kamieniu i Nowym Mieście mieszkania są wysokie, często ponad 3 m. Powietrza do schłodzenia jest więcej, więc moc dobieramy do kubatury, a nie tylko do metrażu.",
    ],
    faq: [
      {
        question: "Czy dojeżdżacie do Wałbrzycha?",
        answer:
          "Tak, do wszystkich dzielnic. Wałbrzych leży w strefie 10–20 km od siedziby w Świebodzicach. Dojeżdżamy też do Szczawna-Zdroju, Boguszowa-Gorc i Jedliny-Zdroju.",
      },
      {
        question: "Mieszkanie w kamienicy ma ponad 3 m wysokości. Jaka moc?",
        answer:
          "Przelicznik 0,1 kW na 1 m² dotyczy pomieszczeń o wysokości 2,5–2,7 m. W wyższym mieszkaniu moc trzeba zwiększyć mniej więcej proporcjonalnie do wysokości: pokój 25 m² o wysokości 3,3 m potrzebuje około 3,2 kW zamiast 2,5 kW.",
      },
      {
        question: "Czy klimatyzator dogrzeje mieszkanie w kamienicy?",
        answer:
          "Wiosną i jesienią tak. W nieocieplonej kamienicy zimą sam klimatyzator zwykle nie wystarczy jako jedyne źródło ciepła, ale dobrze sprawdza się jako dogrzewanie.",
      },
    ],
  },
  "pompy-ciepla-swidnica": {
    service: "pompy-ciepla",
    city: "Świdnica",
    title: "Pompy ciepła Świdnica – montaż i serwis | Klimax",
    description:
      "Dobór, montaż i serwis pomp ciepła w Świdnicy i okolicy. Certyfikowany instalator, uprawnienia F-Gaz i SEP, 25 lat doświadczenia. Dojazd ze Świebodzic, do 10 km.",
    lead: "Dobieramy, montujemy i serwisujemy pompy ciepła w Świdnicy i okolicznych miejscowościach. To nasza najbliższa strefa dojazdu: do 10 km od siedziby w Świebodzicach.",
    local: [
      "Świdnica leży na Równinie Świdnickiej, niżej niż Wałbrzych, i zimy są tu łagodniejsze. To dobre warunki dla powietrznej pompy ciepła: im cieplej na zewnątrz, tym mniej prądu zużywa.",
      "Pompę montujemy w nowych domach i przy wymianie starego kotła. W całym województwie dolnośląskim obowiązuje uchwała antysmogowa, która etapami wycofuje najstarsze kotły na węgiel i drewno.",
    ],
    faq: [
      {
        question: "Czy dojeżdżacie do Świdnicy z montażem i serwisem?",
        answer:
          "Tak. Świdnica leży w naszej najbliższej strefie dojazdu, do 10 km od siedziby w Świebodzicach. Montujemy i serwisujemy pompy także w okolicznych miejscowościach, między innymi w Jaworzynie Śląskiej, Żarowie i Marcinowicach.",
      },
      {
        question: "Starszy dom z grzejnikami: czy pompa ciepła ma sens?",
        answer:
          "Ma, ale trzeba to policzyć. Grzejniki potrzebują wody o temperaturze 45–55°C, a im wyższa temperatura zasilania, tym więcej prądu zużywa pompa. Pomaga ocieplenie domu i większe grzejniki, które oddają tyle samo ciepła przy niższej temperaturze wody.",
      },
    ],
  },
  "pompy-ciepla-walbrzych": {
    service: "pompy-ciepla",
    city: "Wałbrzych",
    title: "Pompy ciepła Wałbrzych – montaż i serwis | Klimax",
    description:
      "Dobór, montaż i serwis pomp ciepła w Wałbrzychu. Moc dobierana do budynku i górskiego klimatu. Uprawnienia F-Gaz i SEP, 25 lat doświadczenia. Dojazd ze Świebodzic.",
    lead: "Dobieramy, montujemy i serwisujemy pompy ciepła w Wałbrzychu. Miasto leży w strefie 10–20 km od naszej siedziby w Świebodzicach.",
    local: [
      "Wałbrzych leży w Górach Wałbrzyskich, wyżej niż Świebodzice i Świdnica, więc zimy są tu chłodniejsze. Dlatego moc pompy dobieramy do konkretnego budynku i jego położenia.",
      "W starszych domach z grzejnikami pompa pracuje na wyższej temperaturze wody i zużywa więcej prądu, dlatego przed doborem sprawdzamy ocieplenie i instalację grzewczą.",
    ],
    faq: [
      {
        question: "Czy dojeżdżacie do Wałbrzycha z montażem i serwisem?",
        answer:
          "Tak, do wszystkich dzielnic. Wałbrzych leży w strefie 10–20 km od siedziby w Świebodzicach. Dojeżdżamy też do Szczawna-Zdroju, Boguszowa-Gorc i Jedliny-Zdroju.",
      },
      {
        question: "Czy pompa ciepła poradzi sobie z wałbrzyską zimą?",
        answer:
          "Tak. Powietrzne pompy ciepła grzeją także przy kilkunastu stopniach mrozu, ale im zimniej na zewnątrz, tym niższa sprawność. W wyżej położonych dzielnicach ma to większe znaczenie, dlatego liczy się dobór mocy do budynku, a nie sam metraż.",
      },
    ],
  },
};
