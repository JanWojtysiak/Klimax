import type { ReactNode } from "react";

export type Plate = {
  id: string;
  title: string;
  note: string;
  summerNote?: string;
  object: ReactNode;
};

export const plates: Plate[] = [
  {
    id: "pompy-ciepla",
    title: "Pompy\nciepła",
    note: "Dobór, montaż i serwis. Grzeje także przy mrozie.",
    summerNote: "Latem ta sama instalacja chłodzi dom.",
    object: (
      <>
        <path className="plane plane-heat" d="M468,700 L512,700 L512,780 L468,780 Z" />
        <path className="plane plane-wall" d="M468,722 L512,722 L512,730 L468,730 Z" />
        <path className="plane plane-wall" d="M468,750 L512,750 L512,758 L468,758 Z" />
        <path className="plane-heat-line" strokeWidth="8" d="M520,752 H530" />
        <path className="plane plane-heat" d="M530,742 L608,742 L608,800 L530,800 Z" />
        <circle className="plane plane-wall" cx="569" cy="771" r="19" />
        <path className="plane plane-heat" d="M564,758 L574,758 L574,784 L564,784 Z" />
      </>
    ),
  },
  {
    id: "klimatyzacja",
    title: "Klimatyzacja",
    note: "Montaż i przeglądy. Moc dobrana do metrażu.",
    summerNote: "Latem pracuje codziennie. To jej sezon.",
    object: (
      <>
        <path className="plane plane-heat" d="M300,700 L424,700 L424,722 L300,722 Z" />
        <path className="plane plane-wall" d="M308,713 L416,713 L416,717 L308,717 Z" />
        <path className="plane-heat-line" strokeWidth="7" d="M322,742 L362,758 L402,742" />
        <path className="plane-heat-line" strokeWidth="7" d="M322,766 L362,782 L402,766" />
        <path className="plane-heat-line" strokeWidth="6" d="M520,706 H528 M520,742 H528" />
        <path className="plane plane-heat" d="M528,700 L616,700 L616,750 L528,750 Z" />
        <circle className="plane plane-wall" cx="588" cy="725" r="17" />
        <path
          className="plane plane-wall"
          d="M536,710 L566,710 L566,714 L536,714 Z M536,720 L566,720 L566,724 L536,724 Z M536,730 L566,730 L566,734 L536,734 Z"
        />
      </>
    ),
  },
  {
    id: "rekuperacja",
    title: "Rekuperacja",
    note: "Wentylacja z odzyskiem ciepła. Świeże powietrze.",
    object: (
      <>
        <path className="plane-heat-line" strokeWidth="10" d="M368,710 H302 M436,710 H508" />
        <path className="plane-heat-line" strokeWidth="10" d="M308,712 V740 M502,712 V740" />
        <path className="plane plane-heat" d="M296,740 L322,740 L322,756 L296,756 Z" />
        <path className="plane plane-heat" d="M490,740 L516,740 L516,756 L490,756 Z" />
        <path className="plane plane-heat" d="M368,700 L436,700 L436,758 L368,758 Z" />
        <path className="plane plane-wall" d="M368,722 L436,722 L436,730 L368,730 Z" />
      </>
    ),
  },
  {
    id: "elektryka",
    title: "Instalacje\nelektryczne",
    note: "Wykonanie i modernizacja. Uprawnienia SEP 1, 2, 3.",
    object: (
      <>
        <path className="plane plane-heat" d="M598,666 L612,666 L612,800 L598,800 Z" />
        <path className="plane plane-heat" d="M574,680 L636,680 L636,690 L574,690 Z" />
        <path className="plane-heat-line" strokeWidth="6" d="M605,700 Q570,730 522,708" />
        <path className="plane plane-heat" d="M458,700 L512,700 L512,754 L458,754 Z" />
        <path
          className="plane plane-wall"
          d="M464,708 L506,708 L506,716 L464,716 Z M464,722 L506,722 L506,730 L464,730 Z M464,736 L506,736 L506,744 L464,744 Z"
        />
        <path className="plane-heat-line" strokeWidth="5" d="M476,754 V778 H406" />
        <path className="plane plane-heat" d="M390,768 L406,768 L406,786 L390,786 Z" />
      </>
    ),
  },
  {
    id: "wod-kan",
    title: "Instalacje\nwod-kan",
    note: "Woda i kanalizacja. Rozprowadzenie i wymiany.",
    object: (
      <>
        <path className="plane-heat-line" strokeWidth="9" d="M442,708 H322 V752" />
        <path className="plane plane-heat" d="M442,700 L504,700 L504,786 L442,786 Z" />
        <path className="plane plane-wall" d="M442,722 L504,722 L504,730 L442,730 Z" />
        <path className="plane plane-wall" d="M442,758 L504,758 L504,766 L442,766 Z" />
        <circle className="plane plane-wall" cx="322" cy="708" r="13" />
        <path
          className="plane plane-heat"
          d="M318,698 L326,698 L326,718 L318,718 Z M312,704 L332,704 L332,712 L312,712 Z"
        />
        <path className="plane plane-heat" d="M296,752 L350,752 L350,768 L296,768 Z" />
        <path className="plane-heat-line" strokeWidth="8" d="M322,768 V786" />
      </>
    ),
  },
  {
    id: "podlogowka",
    title: "Ogrzewanie\npodłogowe",
    note: "Wykonanie instalacji: pętle i rozdzielacz.",
    summerNote: "Latem nie grzeje. Wtedy najlepiej ją kłaść.",
    object: (
      <>
        <path className="plane plane-heat" d="M464,700 L512,700 L512,748 L464,748 Z" />
        <path
          className="plane plane-wall"
          d="M470,708 L506,708 L506,712 L470,712 Z M470,720 L506,720 L506,724 L470,724 Z M470,732 L506,732 L506,736 L470,736 Z"
        />
        <path className="plane-heat-line" strokeWidth="6" d="M476,748 V756 M500,748 V756" />
        <path className="plane plane-heat" d="M296,754 L512,754 L512,786 L296,786 Z" />
        <path
          className="plane-paper-line"
          strokeWidth="5"
          d="M306,780 V762 H328 V780 H350 V762 H372 V780 H394 V762 H416 V780 H438 V762 H460 V780 H482 V762 H504 V780"
        />
      </>
    ),
  },
];
