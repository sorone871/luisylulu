// Enlace al álbum completo de la boda (Google Photos o Drive, compartido con "cualquiera con el enlace").
export const ALBUM_URL = "";

// Selección de fotos de la boda que se muestran en el sitio.
// Se generan con `node scripts/optimizar-fotos.mjs` a partir de public/images/boda/originales/.
export const fotosBoda: { thumb: string; full: string }[] = [];
