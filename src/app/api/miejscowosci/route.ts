import cities from "polskie-miejscowosci/data.json";

const names = [...new Set((cities as { Name: string }[]).map((city) => city.Name))].sort();

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim().toLowerCase() ?? "";

  if (query.length < 2) {
    return Response.json([]);
  }

  return Response.json(
    names.filter((name) => name.toLowerCase().startsWith(query)).slice(0, 10),
  );
}
