import { parsePhoneNumberFromString } from "libphonenumber-js/max";
import { z } from "zod";

const isPolishPhone = (value: string) => {
  const phone = parsePhoneNumberFromString(value, "PL");
  return phone?.country === "PL" && phone.isValid();
};

const schema = z.object(
  {
    name: z
      .string("Podaj imię i nazwisko.")
      .trim()
      .min(1, "Podaj imię i nazwisko.")
      .max(120, "Imię i nazwisko jest za długie — maksymalnie 120 znaków."),
    phone: z
      .string("Podaj numer telefonu.")
      .trim()
      .refine(
        isPolishPhone,
        "Numer telefonu jest w złym formacie — podaj polski numer, np. 601 573 887.",
      ),
    city: z
      .string("Podaj miejscowość.")
      .trim()
      .min(1, "Podaj miejscowość.")
      .max(120, "Nazwa miejscowości jest za długa — maksymalnie 120 znaków."),
    service: z.string().trim().max(120).default(""),
    message: z
      .string("Napisz wiadomość.")
      .trim()
      .min(30, "Wiadomość jest za krótka — opisz sprawę w co najmniej 30 znakach.")
      .max(4000, "Wiadomość jest za długa — maksymalnie 4000 znaków."),
    website: z.string().max(100).default(""),
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

  const { name, phone, city, service, message, website } = parsed.data;

  if (website) {
    return Response.json({ ok: true });
  }

  const text = `Imię i nazwisko: ${name}\nTelefon: ${phone}\nMiejscowość: ${city}\nZakres: ${service}\n\n${message}`;

  if (!process.env.RESEND_API_KEY) {
    console.log(`[contact]\n${text}`);
    return Response.json({ ok: true });
  }

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Formularz <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? "biuro@klimax.co.pl",
      subject: `Zapytanie: ${service || "kontakt"} — ${city}`,
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
