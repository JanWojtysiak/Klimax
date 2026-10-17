import type { Texts } from "@/lib/texts";
import { InstallerPlate } from "./InstallerPlate";
import { PermitsPlate } from "./PermitsPlate";

export function Certifications({ texts }: { texts: Texts }) {
  return (
    <section className="relative">
      <InstallerPlate texts={texts} />
      <PermitsPlate texts={texts} />
    </section>
  );
}
