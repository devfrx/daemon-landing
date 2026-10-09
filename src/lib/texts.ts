import { readFileSync } from 'node:fs';
import { z } from 'astro/zod';

/** A sentence about daemon, in Italian, the original: the file of daemon it comes from, and a literal piece of it (§3.1 of the design). */
export const italianSentence = z.strictObject({
  text: z.string().min(1),
  source: z.string().min(1),
  quote: z.string().min(1),
});

/** The same sentence in English: the text alone, because its source is the Italian sentence's. */
export const englishSentence = z.strictObject({ text: z.string().min(1) });

/** A word of the interface: it says nothing about daemon, so it has no source (§3.1 of the plan). */
export const interfaceWord = z.strictObject({ text: z.string().min(1) });

/** Reads a file of texts outside Astro — for the checks — with the schema Astro applies to it. */
export function readTexts<Schema extends z.ZodType>(path: string, schema: Schema): Record<string, z.infer<Schema>> {
  return z.record(z.string(), schema).parse(JSON.parse(readFileSync(path, 'utf8')));
}
