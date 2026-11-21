
import { writeFileSync } from 'node:fs';
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TEXT = "Breathe out. The long compile is done; the tests are green. Nothing here needs you to hurry. Stand up, roll your shoulders, and take the next small step like it is easy. It is.";
writeFileSync(dir + '/entry.txt', TEXT);
