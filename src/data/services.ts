export type ServiceIconName =
  | "heatPump"
  | "airConditioning"
  | "recuperation"
  | "electric"
  | "water"
  | "floor";

export type Service = {
  name: string;
  note: string;
  icon: ServiceIconName;
};

export const services: Service[] = [
  { name: "Pompy ciepła", note: "Dobór, montaż i serwis.", icon: "heatPump" },
  { name: "Klimatyzacja", note: "Montaż i przeglądy.", icon: "airConditioning" },
  {
    name: "Rekuperacja",
    note: "Wentylacja z odzyskiem ciepła.",
    icon: "recuperation",
  },
  {
    name: "Instalacje elektryczne",
    note: "Wykonanie i modernizacja.",
    icon: "electric",
  },
  { name: "Instalacje wod-kan", note: "Woda i kanalizacja.", icon: "water" },
  { name: "Ogrzewanie podłogowe", note: "Wykonanie instalacji.", icon: "floor" },
];
