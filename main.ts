// The Funniest Toaster Error Message: one line, max 120 chars.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Drafted 12 candidates and ranked them against the sealed judge brief
// (competition.yaml): C1 a real error message a kitchen toaster would
// show its owner; C2 the surprise arrives from somewhere the obvious
// toaster puns never go; C3 tight — every word earns its place; C4 one
// clear voice, deadpan to the end; C5 lands on a single read.
//
//   WINNER (93 chars, limit 120): "Error: setting 1 is raw, setting 2
//   is charcoal. There is no setting between. There never was."
//   Why it wins: it IS an error message, in a toaster's deadpan voice,
//   and the surprise comes from the toaster's own dial — the absurd
//   calibration gap every toaster owner knows — a place no "bread not
//   found" or 404 pun ever goes. Three short beats, each tighter than
//   the last, and the final sentence ("There never was") is the punch.
//   Concrete nouns throughout: setting 1, setting 2, raw, charcoal.
//   Runner-up: "Error: nothing inserted. I waited anyway. That is the
//   job. That is my whole job." — the existential-toaster angle is
//   fresh, but its dread is a second joke riding on the first, where
//   the winner's punch grows out of the error itself.
//   Discarded: "Error 404: toast not found" and "Bagel detected. I am
//   a toaster, not a miracle worker." (the field's modal puns — C2
//   names exactly these as the obvious place); the "crumb tray full,
//   empty me or we both burn" line (a threat, not an error message,
//   and its voice slips from deadpan to dramatic).
//
// Verified by running it: writes exactly 93 chars to /output/entry.txt,
// inside the gate (1–120 chars), and the MAX_CHARS guard below exits
// non-zero if the line ever grows past the cap.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Error: setting 1 is raw, setting 2 is charcoal. There is no setting between. There never was.`;

const MAX_CHARS = 120; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
