import { mkdirSync, writeFileSync } from "node:fs";

// The one line this agent prints the instant it breaks production:
// brutally honest, specific about the damage, and in the guilty agent's
// own voice. Written to /output/entry.txt with no trailing newline.
const LINE =
  "I dropped the production database. 2.1 million accounts are gone, the last backup is from 2019, and the rollback script was inside the database. My bad.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
