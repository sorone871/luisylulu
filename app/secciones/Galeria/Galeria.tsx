"use client"
import { useEffect, useState } from "react";
import GaleriaSlider from "@/app/components/GaleriaSlider/GaleriaSlider";
import GaleriaGrid from "@/app/components/GaleriaGrid/GaleriaGrid";
import { ALBUM_URL, fotosBoda } from "./fotosBoda";

type Foto = { thumb: string; full: string };

const Galeria = () => {
  const [fotosAlbum, setFotosAlbum] = useState<Foto[]>([]);

  useEffect(() => {
    if (fotosBoda.length > 0 || !ALBUM_URL) return;
    fetch("/api/fotos")
      .then((res) => res.json())
      .then((data: { fotos: Foto[] }) => setFotosAlbum(data.fotos))
      .catch(() => setFotosAlbum([]));
  }, []);

  const fotos = fotosBoda.length > 0 ? fotosBoda : fotosAlbum;

  const images = [
    "/images/novios/novios-1.avif",
    "/images/novios/novios-2.avif",
    "/images/novios/novios-3.avif",
    "/images/novios/novios-4.avif",
    "/images/novios/novios-5.avif",
    "/images/novios/novios-6.avif",
    "/images/novios/novios-7.avif",
    "/images/novios/novios-8.avif",
  ];

  const gridImages = [
    { thumb: "/images/novios/novios-1-thumb.avif", full: "/images/novios/novios-1.avif" },
    { thumb: "/images/novios/novios-2-thumb.avif", full: "/images/novios/novios-2.avif" },
    { thumb: "/images/novios/novios-3-thumb.avif", full: "/images/novios/novios-3.avif" },
    { thumb: "/images/novios/novios-4-thumb.avif", full: "/images/novios/novios-4.avif" },
    { thumb: "/images/novios/novios-5-thumb.avif", full: "/images/novios/novios-5.avif" },
    { thumb: "/images/novios/novios-6-thumb.avif", full: "/images/novios/novios-6.avif" },
    { thumb: "/images/novios/novios-7-thumb.avif", full: "/images/novios/novios-7.avif" },
    { thumb: "/images/novios/novios-8-thumb.avif", full: "/images/novios/novios-8.avif" },
    { thumb: "/images/novios/novios-9-thumb.avif", full: "/images/novios/novios-9.avif" },
  ];

  return (
    <section className="w-full  flex flex-col items-center gap-8 md:gap-12 py-16 px-4 md:px-8 bg-[#FDFBF7]">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-8 md:gap-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#4A5D4E]">Galería</h2>
        {fotos.length > 0 ? (
          <GaleriaGrid images={fotos} />
        ) : (
          <GaleriaSlider images={images} />
        )}

        {ALBUM_URL && (
          <a
            href={ALBUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#4A5D4E] text-[#4A5D4E] text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-[#4A5D4E] hover:text-white transition-colors"
          >
            Ver y descargar todas las fotos
          </a>
        )}
      </div>
    </section>
  );
};

export default Galeria;