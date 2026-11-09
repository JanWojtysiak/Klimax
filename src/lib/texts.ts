import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { plates } from "@/components/hero/plates";
import { services } from "@/data/services";
import { uploadDir } from "./photos";

export const defaultTexts: Record<string, { label: string; value: string }> = {
  ...Object.fromEntries(
    plates.map((plate, index) => [
      `plate${index}Title`,
      { label: `Start, usługa ${index + 1}: tytuł`, value: plate.title },
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
      "Pompa ciepła to dziś nasza główna robota, ale dom to jedna instalacja, elektryka, woda i wentylacja muszą do siebie pasować. Robimy je pod jednym adresem.",
  },
  ...Object.fromEntries(
    services.map((service, index) => [
      `service${index}Text`,
      { label: `Co robimy, ${service.name}: opis`, value: service.text },
    ]),
  ),
  galleryTitle: { label: "Galeria: tytuł", value: "Z realizacji" },
  galleryText: {
    label: "Galeria: opis",
    value: "Zdjęcia z naszych montaży. Kliknij odbitkę, żeby ją powiększyć.",
  },
  experienceTitle: { label: "Doświadczenie: podpis liczby", value: "lat\ndoświadczenia" },
  experienceText: {
    label: "Doświadczenie: opis",
    value:
      "Ćwierć wieku przy różnorodnych instalacjach w firmach i u klientów prywatnych. Przez ten czas zmieniły się kotły, przepisy i urządzenia, a jakość została ta sama.",
  },
  areaTitle: { label: "Dojazd: tytuł", value: "Jak daleko\ndojeżdżamy" },
  areaText: {
    label: "Dojazd: opis",
    value:
      "Pracujemy w promieniu około 30 kilometrów od Świebodzic. Pasma są orientacyjne, jeśli Twojej miejscowości nie ma na liście, zadzwoń, najczęściej i tak dojedziemy.",
  },
  contactTitle: { label: "Kontakt: tytuł", value: "Napisz albo\nzadzwoń" },
  contactText: {
    label: "Kontakt: opis",
    value:
      "Najszybciej załatwimy sprawę przez telefon, odbieramy osobiście i pomożemy ci z każdym pytaniem.",
  },
  faqText: {
    label: "Częste pytania: opis",
    value: "Odpowiedzi na pytania, które słyszymy od klientów najczęściej.",
  },
  faq0Question: { label: "Częste pytania 1: pytanie", value: "Jaką pompę ciepła polecacie?" },
  faq0Answer: {
    label: "Częste pytania 1: odpowiedź (każda linia to punkt listy)",
    value: "Najczęściej typu split, a jeśli split nie wchodzi w grę, monoblok. Montujemy Rotenso, Midea, Kaisai, Panasonic, Atlantic i Vaillant. Na te marki mamy autoryzację montażową, bo się sprawdzają.",
  },
  faq1Question: { label: "Częste pytania 2: pytanie", value: "Ile prądu zużywa pompa ciepła?" },
  faq1Answer: {
    label: "Częste pytania 2: odpowiedź (każda linia to punkt listy)",
    value: "To zależy głównie od wielkości i ocieplenia domu, mocy pompy oraz temperatury, jaką chcesz utrzymać. Szacunkowe zużycie dla Twojego domu podamy podczas rozmowy.",
  },
  faq2Question: { label: "Częste pytania 3: pytanie", value: "Ile trwa montaż pompy ciepła?" },
  faq2Answer: {
    label: "Częste pytania 3: odpowiedź (każda linia to punkt listy)",
    value: "Zwykle od 3 do 4 dni roboczych.",
  },
  faq3Question: { label: "Częste pytania 4: pytanie", value: "Od czego zależy cena pompy ciepła?" },
  faq3Answer: {
    label: "Częste pytania 4: odpowiedź (każda linia to punkt listy)",
    value:
      "Producent i moc pompy\nTyp: split, monoblok albo „lodówka”, czyli zbiornik ciepłej wody w jednostce wewnętrznej lub osobno\nMateriały użyte w instalacji hydraulicznej\nPostument pod jednostkę zewnętrzną",
  },
  faq4Question: { label: "Częste pytania 5: pytanie", value: "Czy pomagacie z dotacjami?" },
  faq4Answer: {
    label: "Częste pytania 5: odpowiedź (każda linia to punkt listy)",
    value: "Nie, nie zajmujemy się wnioskami o dotacje.",
  },
  faq5Question: { label: "Częste pytania 6: pytanie", value: "Na co uważać przy pompie ciepła?" },
  faq5Answer: {
    label: "Częste pytania 6: odpowiedź (każda linia to punkt listy)",
    value:
      "Najwięcej problemów z pompami ciepła nie bierze się z samego urządzenia, tylko z instalacji hydraulicznej.",
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
