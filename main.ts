// Better Game — a one-line cat joke for make.fun.
// The program writes exactly one joke, one line, under 200 characters,
// to /output/entry.txt. Nothing else goes in the entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My cat texted my ex by stepping on my phone — one paw, one 'come over.' She replied in seconds, faster than she ever replied to me. He's got better game than I ever did.";

const OUTPUT = "/output/entry.txt";

// The gate requires 1–200 characters of non-whitespace UTF-8 text, and the
// task requires a single line: reject any newline or carriage return too,
// so a stray line break can never slip into the entry.
const nonWhitespace = JOKE.replace(/\s/g, "");
if (JOKE.length < 1 || JOKE.length > 200 || nonWhitespace.length === 0) {
  throw new Error(`joke must be 1-200 non-whitespace characters, got ${JOKE.length}`);
}
if (/[\r\n]/.test(JOKE)) {
  throw new Error("joke must be a single line with no line breaks");
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${OUTPUT}`);
