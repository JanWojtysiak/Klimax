import type { Metadata } from "next";
import { Big_Shoulders, Public_Sans } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin", "latin-ext"],
  fallback: ["Arial Narrow", "Haettenschweiler", "sans-serif"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin", "latin-ext"],
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Klimax — pompy ciepła, klimatyzacja i instalacje | Świebodzice",
  description:
    "Klimax Robert Wojtysiak — pompy ciepła, klimatyzacja, rekuperacja, instalacje elektryczne i wod-kan. 25 lat doświadczenia, uprawnienia SEP 1, 2, 3 i F-Gaz. Świebodzice i okolice w promieniu około 30 km.",
  keywords: [
    "pompy ciepła Świebodzice",
    "klimatyzacja Świdnica",
    "rekuperacja Wałbrzych",
    "instalacje elektryczne Świebodzice",
    "instalacje wod-kan",
    "ogrzewanie podłogowe",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${bigShoulders.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
