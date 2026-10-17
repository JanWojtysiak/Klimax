import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type Photo = { file: string; alt: string };

export const uploadDir =
  process.env.UPLOAD_DIR ?? path.join(process.cwd(), "uploads");

const indexFile = path.join(uploadDir, "photos.json");

export async function getPhotos(): Promise<Photo[]> {
  return JSON.parse(await readFile(indexFile, "utf8").catch(() => "[]"));
}

export async function savePhotos(photos: Photo[]) {
  await mkdir(uploadDir, { recursive: true });
  await writeFile(indexFile, JSON.stringify(photos, null, 2));
}
