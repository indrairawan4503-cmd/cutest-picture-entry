// Cutest picture entry for make.fun cutest-picture-01.
// Copies the pre-rendered image entry.png into the grading output dir.
// The copy is deterministic, so both grading runs produce identical bytes.
// The image is a 1024x1024 JPEG under the 1 MiB gate, named entry.png as
// the rules allow (the format is told apart by its first bytes, not the name).
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(join(import.meta.dirname, 'entry.png'), join(out, 'entry.png'));
