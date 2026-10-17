import { readFile } from "node:fs/promises";
import path from "node:path";
import { uploadDir } from "@/lib/photos";

const types: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> },
) {
  const file = path.basename((await params).file);
  const type = types[path.extname(file)];
  const data = type
    ? await readFile(path.join(uploadDir, file)).catch(() => null)
    : null;

  if (!data) return new Response(null, { status: 404 });

  return new Response(data, {
    headers: {
      "Content-Type": type,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
