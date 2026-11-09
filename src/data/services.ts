export type ServiceIconName =
  | "heatPump"
  | "airConditioning"
  | "recuperation"
  | "electric"
  | "water"
  | "floor";

export type Service = {
  name: string;
  icon: ServiceIconName;
  text: string;
};

export const services: Service[] = [
  {
    name: "Pompy ciepła",
    icon: "heatPump",
    text: "Dobór, montaż i serwis pomp ciepła. Grzeją także przy mrozie, a latem ta sama instalacja chłodzi dom.",
  },
  {
    name: "Klimatyzacja",
    icon: "airConditioning",
    text: "Montaż i przeglądy klimatyzacji. Moc dobieramy do metrażu.",
  },
  {
    name: "Rekuperacja",
    icon: "recuperation",
    text: "Montaż rekuperacji, czyli wentylacji z odzyskiem ciepła. Świeże powietrze w całym domu.",
  },
  {
    name: "Instalacje elektryczne",
    icon: "electric",
    text: "Wykonanie i modernizacja instalacji elektrycznych. Uprawnienia SEP 1, 2 i 3.",
  },
  {
    name: "Instalacje wod-kan",
    icon: "water",
    text: "Instalacje wody i kanalizacji: rozprowadzenie i wymiany.",
  },
  {
    name: "Ogrzewanie podłogowe",
    icon: "floor",
    text: "Wykonanie ogrzewania podłogowego: pętle i rozdzielacz.",
  },
];
