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
};

export const services: Service[] = [
  { name: "Pompy ciepła", icon: "heatPump" },
  { name: "Klimatyzacja", icon: "airConditioning" },
  {
    name: "Rekuperacja",
    icon: "recuperation",
  },
  {
    name: "Instalacje elektryczne",
    icon: "electric",
  },
  { name: "Instalacje wod-kan", icon: "water" },
  { name: "Ogrzewanie podłogowe", icon: "floor" },
];
