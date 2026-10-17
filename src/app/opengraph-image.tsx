import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} ${site.owner} — pompy ciepła, klimatyzacja i instalacje, ${site.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toDataUrl = async (file: string) =>
  `data:image/png;base64,${(await readFile(path.join(process.cwd(), "public", file))).toString("base64")}`;

export default async function Image() {
  const [logo, photo] = await Promise.all([
    toDataUrl("brand/logo-mark-winter.png"),
    toDataUrl("instalator.png"),
  ]);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#16332b", color: "#efe9da" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "flex-start", gap: 8, fontSize: 24, letterSpacing: 4 }}>
            <img src={logo} width={312} height={102} alt="" />
            {site.name.toUpperCase()} · {site.owner.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
            <span>Pompy ciepła</span>
            <span>Klimatyzacja</span>
            <span>Rekuperacja</span>
            <span>Instalacje</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d8452a" }}>
            {site.city} · {site.phone}
          </div>
        </div>
        <img src={photo} width={501} height={630} style={{ objectFit: "cover" }} alt="" />
      </div>
    ),
    size,
  );
}
