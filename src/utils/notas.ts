import { getCollection, type CollectionEntry } from "astro:content";

export type Nota = CollectionEntry<"notas">;
export type IdiomaNota = "pt" | "en";

/** O id da entrada é "<idioma>/<slug>" (subpasta + nome do arquivo). */
export const slugDaNota = (nota: Nota) => nota.id.split("/").pop() ?? nota.id;
export const idiomaDaNota = (nota: Nota) => nota.id.split("/")[0] as IdiomaNota;

/** Notas de um idioma, da mais recente para a mais antiga. */
export async function notasPorIdioma(idioma: IdiomaNota): Promise<Nota[]> {
  const notas = await getCollection("notas", (n) => idiomaDaNota(n) === idioma);
  return notas.sort((a, b) => b.data.data.valueOf() - a.data.data.valueOf());
}

/** Data por extenso (ex.: "6 de outubro de 2026"); UTC para não voltar um dia. */
export function formatarData(data: Date, idioma: IdiomaNota): string {
  return data.toLocaleDateString(idioma === "pt" ? "pt-BR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
