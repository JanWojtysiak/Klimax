import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { plates } from "@/components/hero/plates";
import { uploadDir } from "./photos";

export const defaultTexts: Record<string, { label: string; value: string }> = {
  ...Object.fromEntries(
    plates.flatMap((plate, index) => [
      [`plate${index}Title`, { label: `Start — usługa ${index + 1}: tytuł`, value: plate.title }],
      [`plate${index}Note`, { label: `Start — usługa ${index + 1}: opis`, value: plate.note }],
      ...(plate.summerNote
        ? [[`plate${index}SummerNote`, { label: `Start — usługa ${index + 1}: opis latem`, value: plate.summerNote }]]
        : []),
    ]),
  ),
  installerTitle: { label: "Certyfikowany instalator: tytuł", value: "Certyfikowany\ninstalator" },
  installerText: {
    label: "Certyfikowany instalator: opis",
    value:
      "Mamy firmowe certyfikaty montażowe i serwisowe wymienionych producentów. To znaczy, że montaż nie unieważnia gwarancji urządzenia.",
  },
  permitsTitle: { label: "Uprawnienia: tytuł", value: "Uprawnienia\nzawodowe" },
  permitsText: {
    label: "Uprawnienia: opis",
    value:
      "Instalację elektryczną i czynnik chłodniczy obsługuje u nas ktoś, kto ma do tego uprawnienia wymagane prawem.",
  },
  servicesTitle: { label: "Co robimy: tytuł", value: "Co robimy" },
  servicesText: {
    label: "Co robimy: opis",
    value:
      "Pompa ciepła to dziś nasza główna robota, ale dom to jedna instalacja — elektryka, woda i wentylacja muszą do siebie pasować. Robimy je pod jednym adresem.",
  },
  galleryTitle: { label: "Galeria: tytuł", value: "Z realizacji" },
  galleryText: {
    label: "Galeria: opis",
    value: "Zdjęcia z naszych montaży. Kliknij odbitkę, żeby ją powiększyć.",
  },
  experienceTitle: { label: "Doświadczenie: podpis liczby", value: "lat\ndoświadczenia" },
  experienceText: {
    label: "Doświadczenie: opis",
    value:
      "Ćwierć wieku przy różnorodnych instalacjach w firmach i u klientów prywatnych. Przez ten czas zmieniły się kotły, przepisy i urządzenia — a jakość została ta sama.",
  },
  areaTitle: { label: "Dojazd: tytuł", value: "Jak daleko\ndojeżdżamy" },
  areaText: {
    label: "Dojazd: opis",
    value:
      "Pracujemy w promieniu około 30 kilometrów od Świebodzic. Pasma są orientacyjne — jeśli Twojej miejscowości nie ma na liście, zadzwoń, najczęściej i tak dojedziemy.",
  },
  contactTitle: { label: "Kontakt: tytuł", value: "Napisz albo\nzadzwoń" },
  contactText: {
    label: "Kontakt: opis",
    value:
      "Najszybciej załatwimy sprawę przez telefon — odbieramy osobiście i pomożemy ci z każdym pytaniem.",
  },
};

export type Texts = Record<string, string>;

const textsFile = path.join(uploadDir, "texts.json");

export async function getSavedTexts(): Promise<Texts> {
  return JSON.parse(await readFile(textsFile, "utf8").catch(() => "{}"));
}

export async function getTexts(): Promise<Texts> {
  const saved = await getSavedTexts();
  return Object.fromEntries(
    Object.entries(defaultTexts).map(([key, { value }]) => [key, saved[key] || value]),
  );
}

export async function saveTexts(texts: Texts) {
  await mkdir(uploadDir, { recursive: true });
  await writeFile(textsFile, JSON.stringify(texts, null, 2));
}
