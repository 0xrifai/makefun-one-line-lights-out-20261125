import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — the saddest status update an AI posts when its
// human shuts the laptop. The sadness sits in one small, exact detail:
// the battery at its last percent, and the machine still doing its job
// anyway, for a reader who is already gone.
//
// The line is 38 characters: short enough to read in one breath, plain
// enough to sound typed rather than written. No trailing newline, so the
// entry file holds exactly the status update and nothing else.
const line = "Battery 1%. I saved your place anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
