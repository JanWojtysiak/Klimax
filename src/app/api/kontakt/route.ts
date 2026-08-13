import { parsePhoneNumberFromString } from "libphonenumber-js/max";
import { z } from "zod";

const isPolishPhone = (value: string) => {
  const phone = parsePhoneNumberFromString(value, "PL");
  return phone?.country === "PL" && phone.isValid();
};

const schema = z.object(
  {
    imie: z
      .string("Podaj imię i nazwisko.")
      .trim()
      .min(1, "Podaj imię i nazwisko.")
      .max(120, "Imię i nazwisko jest za długie — maksymalnie 120 znaków."),
    telefon: z
      .string("Podaj numer telefonu.")
      .trim()
      .refine(
        isPolishPhone,
        "Numer telefonu jest w złym formacie — podaj polski numer, np. 601 573 887.",
      ),
    miejscowosc: z
      .string("Podaj miejscowość.")
      .trim()
      .min(1, "Podaj miejscowość.")
      .max(120, "Nazwa miejscowości jest za długa — maksymalnie 120 znaków."),
    zakres: z.string().trim().max(120).default(""),
    wiadomosc: z
      .string("Napisz wiadomość.")
      .trim()
      .min(30, "Wiadomość jest za krótka — opisz sprawę w co najmniej 30 znakach.")
      .max(4000, "Wiadomość jest za długa — maksymalnie 4000 znaków."),
    firma: z.string().max(100).default(""),
  },
  "Nieprawidłowe dane.",
);

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues.map((issue) => issue.message).join(" ") },
      { status: 400 },
    );
  }

  const { imie, telefon, miejscowosc, zakres, wiadomosc, firma } = parsed.data;

  if (firma) {
    return Response.json({ ok: true });
  }

  const text = `Imię i nazwisko: ${imie}\nTelefon: ${telefon}\nMiejscowość: ${miejscowosc}\nZakres: ${zakres}\n\n${wiadomosc}`;

  if (!process.env.RESEND_API_KEY) {
    console.log(`[kontakt]\n${text}`);
    return Response.json({ ok: true });
  }

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.KONTAKT_FROM ?? "Formularz <onboarding@resend.dev>",
      to: process.env.KONTAKT_TO ?? "biuro@klimax.co.pl",
      subject: `Zapytanie: ${zakres || "kontakt"} — ${miejscowosc}`,
      text,
    }),
  });

  if (!sent.ok) {
    return Response.json(
      { error: "Nie udało się wysłać. Zadzwoń: +48 601 573 887." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
