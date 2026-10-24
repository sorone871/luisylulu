// Convierte las fotos de public/images/boda/originales/ a versiones ligeras (.avif)
// para la galería: boda-N.avif (grande) y boda-N-thumb.avif (miniatura).
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ORIGEN = "public/images/boda/originales";
const DESTINO = "public/images/boda";

const archivos = (await readdir(ORIGEN))
  .filter((f) => /\.(jpe?g|png|webp|heic|avif)$/i.test(f))
  .sort();

await mkdir(DESTINO, { recursive: true });

for (const [i, archivo] of archivos.entries()) {
  const n = i + 1;
  const entrada = path.join(ORIGEN, archivo);
  await sharp(entrada).rotate().resize({ width: 1600, withoutEnlargement: true }).avif({ quality: 55 }).toFile(path.join(DESTINO, `boda-${n}.avif`));
  await sharp(entrada).rotate().resize({ width: 500, withoutEnlargement: true }).avif({ quality: 50 }).toFile(path.join(DESTINO, `boda-${n}-thumb.avif`));
  console.log(`${archivo} -> boda-${n}.avif`);
}
