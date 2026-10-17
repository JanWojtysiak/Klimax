export type DistanceBand = {
  range: string;
  tone: string;
  stamp: string;
  ring: number;
  towns: string[];
};

export const distanceBands: DistanceBand[] = [
  {
    range: "0–10 km",
    tone: "bg-spruce text-stock",
    stamp: "bg-stock text-spruce",
    ring: 0,
    towns: ["Świebodzice", "Szczawno-Zdrój", "Świdnica"],
  },
  {
    range: "10–20 km",
    tone: "bg-slate text-stock",
    stamp: "bg-stock text-slate",
    ring: 1,
    towns: ["Wałbrzych", "Jaworzyna Śląska", "Dobromierz", "Strzegom", "Żarów"],
  },
  {
    range: "20–30 km",
    tone: "bg-ochre text-spruce",
    stamp: "bg-spruce text-ochre",
    ring: 2,
    towns: [
      "Bolków",
      "Boguszów-Gorce",
      "Jedlina-Zdrój",
      "Marcinowice",
      "Kamienna Góra",
    ],
  },
];

export const ringRadii = [20, 38, 56];
