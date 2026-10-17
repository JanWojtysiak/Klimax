"use server";

import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { getPhotos, savePhotos, uploadDir } from "@/lib/photos";
import { defaultTexts, saveTexts } from "@/lib/texts";

const extensions: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/avif": ".avif",
};

const enabled = () => !!process.env.ADMIN_PASSWORD && !!process.env.ADMIN_SECRET;

const token = () =>
  createHmac("sha256", process.env.ADMIN_SECRET!).update("klimax-admin").digest("hex");

const equal = (a: string, b: string) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

const failures = new Map<string, { count: number; until: number }>();

export async function isAdmin() {
  if (!enabled()) return false;
  return equal((await cookies()).get("admin")?.value ?? "", token());
}

export async function login(formData: FormData) {
  if (!enabled()) return;
  const ip = ((await headers()).get("x-forwarded-for") ?? "").split(",").pop()!.trim();
  const now = Date.now();
  const entry = failures.get(ip);
  if (entry && entry.until > now && entry.count >= 5) return;

  if (equal(String(formData.get("password") ?? ""), process.env.ADMIN_PASSWORD!)) {
    failures.delete(ip);
    (await cookies()).set("admin", token(), {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30,
    });
  } else {
    failures.set(ip, entry && entry.until > now
      ? { ...entry, count: entry.count + 1 }
      : { count: 1, until: now + 60 * 60 * 1000 });
  }
  revalidatePath("/admin");
}

export async function logout() {
  (await cookies()).delete("admin");
  revalidatePath("/admin");
}

export async function upload(formData: FormData) {
  if (!(await isAdmin())) return;
  const alt = String(formData.get("alt") ?? "").trim().slice(0, 200);
  const added = [];
  await mkdir(uploadDir, { recursive: true });

  for (const file of formData.getAll("photos")) {
    if (!(file instanceof File) || !extensions[file.type]) continue;
    const name = `${Date.now()}-${randomUUID().slice(0, 8)}${extensions[file.type]}`;
    await writeFile(path.join(uploadDir, name), Buffer.from(await file.arrayBuffer()));
    added.push({ file: name, alt: alt || "Realizacja Klimax" });
  }

  await savePhotos([...added, ...(await getPhotos())]);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function remove(name: string) {
  if (!(await isAdmin())) return;
  const file = path.basename(String(name));
  await savePhotos((await getPhotos()).filter((photo) => photo.file !== file));
  await unlink(path.join(uploadDir, file)).catch(() => null);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function reorder(files: string[]) {
  if (!(await isAdmin())) return;
  const rank = (file: string) => files.indexOf(file);
  const photos = await getPhotos();
  await savePhotos(photos.sort((a, b) => rank(a.file) - rank(b.file)));
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateTexts(formData: FormData) {
  if (!(await isAdmin())) return;
  const texts: Record<string, string> = {};
  for (const [key, { value }] of Object.entries(defaultTexts)) {
    const text = String(formData.get(key) ?? "").replace(/\r/g, "").trim().slice(0, 2000);
    if (text && text !== value) texts[key] = text;
  }
  await saveTexts(texts);
  revalidatePath("/");
  revalidatePath("/admin");
}
