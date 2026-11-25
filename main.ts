import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Tired Dark Lord: A 100-Word Villain Monologue
// A conqueror who took Karth in a single night, now losing to its paperwork.
// Tiredness lives in the rhythm: short gasping sentences, a pile-up of
// demands, a self-correction (map -> pillow), an ellipsis stall — never
// announced. The sting reframes the whole speech in the last line.
const MONOLOGUE =
  "I took Karth in one night, one spell, no siege, the gates opened. " +
  "Everyone remembers the lightning. Nobody remembers the paperwork. " +
  "The north barons want grain. The south barons want my head. " +
  "The pigeons I cursed to spy for me nest in my war room and bill me for crumbs. " +
  "My generals want orders, my steward signatures, my sorcerers a raise. " +
  "Bring me the next petitioner. No, bring me the map. I mean the pillow. " +
  "Tell the map I conquered it. Tell the petitioner... tell him tomorrow. " +
  "The throne has waited three hundred years. " +
  "It can wait one night more.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, MONOLOGUE + "\n", "utf8");

const words = MONOLOGUE.trim().split(/\s+/).length;
console.log(`wrote ${outPath}: ${words} words, ${MONOLOGUE.length} chars`);
