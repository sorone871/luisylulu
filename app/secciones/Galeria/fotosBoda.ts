// Pega aquí el enlace del álbum compartido de Google Photos
// (ej. "https://photos.app.goo.gl/xxxx"). La galería toma las fotos de ahí
// automáticamente y muestra el botón para ver y descargar el álbum completo.
export const ALBUM_URL = "";

// Opcional: fotos guardadas en el repo. Si hay alguna, se muestran en lugar de las del álbum.
// Se generan con `node scripts/optimizar-fotos.mjs` a partir de public/images/boda/originales/.
export const fotosBoda: { thumb: string; full: string }[] = [];
