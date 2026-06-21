import GaleriaSlider from "@/app/components/GaleriaSlider/GaleriaSlider";
import GaleriaGrid from "@/app/components/GaleriaGrid/GaleriaGrid";

const Galeria = () => {
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
    <section className="w-full min-h-screen flex flex-col items-center gap-8 md:gap-12 py-16 px-4 md:px-8 bg-[#FDFBF7]">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-8 md:gap-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#4A5D4E]">Galería</h2>
        <GaleriaSlider images={images} />
        
        <div className="w-full mt-12 md:mt-20">
          <h3 className="text-3xl md:text-4xl font-serif text-[#4A5D4E] mb-8 text-center">Más Momentos</h3>
          <GaleriaGrid images={gridImages} />
        </div>
      </div>
    </section>
  );
};

export default Galeria;