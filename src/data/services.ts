export type ServiceIconName =
  | "heatPump"
  | "airConditioning"
  | "recuperation"
  | "electric"
  | "water"
  | "floor";

export type Service = {
  name: string;
  slug: string;
  icon: ServiceIconName;
  text: string;
};

export const services: Service[] = [
  {
    name: "Pompy ciepła",
    slug: "pompy-ciepla",
    icon: "heatPump",
    text: "Dobór, montaż i serwis pomp ciepła. Grzeją także przy mrozie, a latem ta sama instalacja chłodzi dom.",
  },
  {
    name: "Klimatyzacja",
    slug: "klimatyzacja",
    icon: "airConditioning",
    text: "Montaż i przeglądy klimatyzacji. Moc dobieramy do metrażu.",
  },
  {
    name: "Rekuperacja",
    slug: "rekuperacja",
    icon: "recuperation",
    text: "Montaż rekuperacji, czyli wentylacji z odzyskiem ciepła. Świeże powietrze w całym domu.",
  },
  {
    name: "Instalacje elektryczne",
    slug: "instalacje-elektryczne",
    icon: "electric",
    text: "Wykonanie i modernizacja instalacji elektrycznych. Uprawnienia SEP 1, 2 i 3.",
  },
  {
    name: "Instalacje wod-kan",
    slug: "instalacje-wod-kan",
    icon: "water",
    text: "Instalacje wody i kanalizacji: rozprowadzenie i wymiany.",
  },
  {
    name: "Ogrzewanie podłogowe",
    slug: "ogrzewanie-podlogowe",
    icon: "floor",
    text: "Wykonanie ogrzewania podłogowego: pętle i rozdzielacz.",
  },
];
