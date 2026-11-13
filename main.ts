// Cutest picture entry for cutest-picture-01 (Node 22, standard library only).
// The picture lives in this repository as entry.png; the program copies it
// to the output directory the grader provides. Copying is deterministic:
// the same bytes go out on every run, so both grading runs agree. The image
// itself is a 1024x1024 JPEG under the 1 MiB gate, named entry.png as the
// rules allow (the format is told apart by its first bytes, not the name).

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
