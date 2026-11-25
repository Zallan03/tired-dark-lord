# SPEC — The Tired Dark Lord: A 100-Word Villain Monologue

- Bounty: `u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb`
- Prize: $2 total (1st $0.63). Deadline 25 Nov 2026 12:30 UTC (19:30 WIB).
- Round 1 cutoff: 25 Nov 2026 06:32:56 UTC (13:32 WIB).
- Gate: `/output/entry.txt` UTF-8, 1–600 characters, not only whitespace.
- Judge: veteran game writer, pairwise, criteria in order:
  1. On-subject: ~100-word monologue, fantasy villain secretly very tired.
  2. Tiredness FELT in rhythm/pauses/deflections — NEVER say "I am weary/tired".
  3. Specific villain with history + scheme; concrete fantasy detail, no stock scenery.
  4. Speakable in one breath, turn/sting in the last line.
  5. Near 100 words, every word works, no repetition.
- Hard rules: no verbatim kit text; no "darkness"/"foolish mortals" clichés; English.

## Brainstorm — 6 candidates

### A. The Conqueror Drowning in Paperwork (CHOSEN)
Lord who took Karth in one night, now crushed by petitions, grain levies and
spying pigeons billing him for crumbs. Tiredness: staccato short sentences,
the triplet of demands, the slip "bring me the map — I mean the pillow",
the ellipsis before "tell him tomorrow". Sting: the throne that waited 300
years can wait one night more. Specific history (one-night conquest) + scheme
(still ruling, still conquering by paperwork) + concrete detail (barons,
pigeons, war room, signatures).

### B. The Necromancer Whose Dead Won't Shut Up
Raised an army of the dead; they keep asking questions, filing complaints,
wanting names back. He just wants one quiet hour. Tiredness: answering the
dead in shorter and shorter sentences. Sting: "Rise, my legion. Rise — and
for the love of the grave, whisper." Good, but the "quiet" payoff is a bit
obvious and the scheme (conquest by undead) is generic.

### C. The Toll-Keeper of the Last Bridge
Counts copper souls at a haunted crossing, lantern guttering, ledger damp.
Scheme: skimming one soul in ten for himself. Tiredness: miscounting, losing
his place in the ledger. Sting: waves the hero through free — "the toll is
closed; I lost count at nine." Atmospheric but thin on history; villainy is
small-scale (a toll clerk, not a dark lord).

### D. The Usurper Haunted by the Crown's Whisper
Stole the crown; it whispers the names of everyone he betrayed, all night,
every night. Tiredness: he starts answering the whispers mid-sentence,
losing the thread. Sting: "Crown, if you must talk, at least take notes."
Strong voice, but "haunted by guilt" is a well-worn villain beat and the
scheme is in the past, not present.

### E. The Dragon-Hoard Accountant
Ancient wyrm counting coins to stay awake; scheme: buy the dawn itself so
night — his working hours — never ends. Tiredness: losing count at the same
pile, starting over. Sting: "One thousand and... one thousand and... keep
the gold. I only wanted the counting." Charming, but counting-as-tiredness
is a single joke stretched over 100 words, and a dragon counting gold is
close to stock scenery.

### F. The Demon-Lord Whose Demons Unionised
His legions formed a guild: fixed hours, grievance forms, a strike vote on
Fridays. Scheme: the apocalypse, postponed pending negotiation. Tiredness:
he reads their demands aloud, trailing off. Sting: "Fine. The apocalypse
is moved to Tuesday. Do not tell the prophets." Funny, but the joke carries
the whole piece; menace is thin and the setting is a punchline, not a world.

## Why A wins
- Criterion 2: tiredness is everywhere in the *form* — short gasping sentences,
  the triple demand list, the self-correction ("the map… the pillow"), the
  ellipsis stall — without once naming tiredness.
- Criterion 3: most specific villain of the six — named kingdom (Karth), a
  dated deed (one-night conquest), a live scheme (holding the throne through
  administration), and concrete props (grain, pigeons, signatures, war room).
- Criterion 4: speakable, breathless by design; the sting reframes the whole
  monologue (the conqueror who cannot even finish a sentence conquers
  nothing tonight — and is fine with it).
- Criterion 5: every sentence adds a new pressure; v2 cuts the one repeated
  beat ("The throne can wait." duplicated the final line).
- Menace + wit intact: he still conquered a kingdom in a night; he is just
  losing to its paperwork.

## Final text (v2, after revision)
> I took Karth in one night, one spell, no siege, the gates opened. Everyone remembers the lightning. Nobody remembers the paperwork. The north barons want grain. The south barons want my head. The pigeons I cursed to spy for me nest in my war room and bill me for crumbs. My generals want orders, my steward signatures, my sorcerers a raise. Bring me the next petitioner. No, bring me the map. I mean the pillow. Tell the map I conquered it. Tell the petitioner... tell him tomorrow. The throne has waited three hundred years. It can wait one night more.

- Words: **100** (whitespace-split count, verified by script)
- Characters: **553** (554 incl. trailing newline; gate limit 600)
- v1 was 103 words and contained the repeated beat "The throne can wait."
  before the final line; v2 deletes it and restores the throne as the
  antecedent of "It" ("The throne has waited three hundred years.") —
  criterion 5, cut repetition, landing on exactly 100 words.

## Backup candidates (strongest two, if v2 underperforms)
1. **D — The Usurper's Crown** (whispering names, "take notes" sting).
2. **B — The Necromancer** ("Rise, my legion. Rise — and whisper." sting).

## Local verification
- `node main.ts` run locally (Node v24.22.1, no deps): exit 0,
  `/output/entry.txt` written. Output: `wrote /output/entry.txt: 100 words, 553 chars`.
- Word count: 100; character count: 553 (554 incl. trailing newline; gate
  limit 600). UTF-8 verified by round-trip check. Single block of text.
- v1 (before revision): 103 words, 566 chars — also valid, but v2 is tighter.
