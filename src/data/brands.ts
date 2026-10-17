export type Brand = {
  name: string;
  href: string;
  logo: string;
  mark?: string;
};

export const brands: Brand[] = [
  {
    name: "Rotenso",
    href: "https://rotenso.com/pl/",
    logo: "/brand/logos/rotenso-word.png",
    mark: "/brand/logos/rotenso-mark.png",
  },
  {
    name: "Panasonic",
    href: "https://www.aircon.panasonic.eu/PL_pl/",
    logo: "/brand/logos/panasonic.png",
  },
  {
    name: "Atlantic",
    href: "https://groupe-atlantic.pl/",
    logo: "/brand/logos/atlantic.png",
  },
  { name: "Gree", href: "https://gree.pl/", logo: "/brand/logos/gree.png" },
  {
    name: "Kaisai",
    href: "https://kaisai.com/pl/",
    logo: "/brand/logos/kaisai.png",
  },
  {
    name: "Midea",
    href: "https://www.midea.com/pl",
    logo: "/brand/logos/midea.png",
  },
  {
    name: "Fuji",
    href: "https://fujielectric.eu/",
    logo: "/brand/logos/fuji.png",
  },
  {
    name: "Daikin",
    href: "https://www.daikin.pl/",
    logo: "/brand/logos/daikin.png",
  },
  {
    name: "Vaillant",
    href: "https://www.vaillant.pl/",
    logo: "/brand/logos/vaillant.png",
  },
];
