import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import { englishSentence, interfaceWord, italianSentence, readTexts } from './texts';

const folders: string[] = [];
afterEach(() => {
  for (const folder of folders.splice(0)) rmSync(folder, { recursive: true, force: true });
});

function file(content: string): string {
  const folder = mkdtempSync(join(tmpdir(), 'landing-texts-'));
  folders.push(folder);
  writeFileSync(join(folder, 'texts.json'), content);
  return join(folder, 'texts.json');
}

describe('the schemas of the texts', () => {
  test('an Italian sentence has a text, a source and a quote, none of them empty, and nothing else', () => {
    expect(italianSentence.safeParse({ text: 't', source: 's', quote: 'q' }).success).toBe(true);
    expect(italianSentence.safeParse({ text: 't', source: 's' }).success).toBe(false);
    expect(italianSentence.safeParse({ text: 't', source: 's', quote: 'q', label: 'l' }).success).toBe(false);
    expect(italianSentence.safeParse({ text: '', source: 's', quote: 'q' }).success).toBe(false);
    expect(italianSentence.safeParse({ text: 't', source: '', quote: 'q' }).success).toBe(false);
    // An empty quote is in every file: the check of the sources would pass on a sentence that quotes nothing.
    expect(italianSentence.safeParse({ text: 't', source: 's', quote: '' }).success).toBe(false);
  });

  test("an English sentence has only its text, not empty: its source is the Italian one's", () => {
    expect(englishSentence.safeParse({ text: 't' }).success).toBe(true);
    expect(englishSentence.safeParse({ text: 't', source: 's' }).success).toBe(false);
    expect(englishSentence.safeParse({ text: '' }).success).toBe(false);
  });

  test('a word of the interface has only its text, not empty', () => {
    expect(interfaceWord.safeParse({ text: 't' }).success).toBe(true);
    expect(interfaceWord.safeParse({ text: 't', source: 's' }).success).toBe(false);
    expect(interfaceWord.safeParse({ text: '' }).success).toBe(false);
  });
});

describe('readTexts', () => {
  test('reads a file of texts, one entry per identifier', () => {
    const path = file('{ "a": { "text": "one" }, "b": { "text": "two" } }');
    expect(readTexts(path, englishSentence)).toEqual({ a: { text: 'one' }, b: { text: 'two' } });
  });

  test('refuses a file with an entry the schema does not accept', () => {
    const path = file('{ "a": { "text": "one", "source": "s" } }');
    expect(() => readTexts(path, englishSentence)).toThrow();
  });
});
