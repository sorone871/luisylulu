// app/api/fotos/route.ts
// Lee el álbum compartido de Google Photos (ALBUM_URL) y regresa sus fotos
// para la galería. El resultado se guarda en caché una hora.
import { ALBUM_URL } from "@/app/secciones/Galeria/fotosBoda";

const FOTO_REGEX = /\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[\w-]+)"/g;

export async function GET() {
  if (!ALBUM_URL) {
    return Response.json({ fotos: [] });
  }

  try {
    const res = await fetch(ALBUM_URL, { next: { revalidate: 3600 } });
    const html = await res.text();
    const urls = [...new Set([...html.matchAll(FOTO_REGEX)].map((m) => m[1]))];

    const fotos = urls.map((url) => ({
      thumb: `${url}=w600`,
      full: `${url}=w1920`,
    }));

    return Response.json({ fotos });
  } catch (error) {
    console.error("No se pudo leer el álbum:", error);
    return Response.json({ fotos: [] });
  }
}
