import GaleriaSlider from "@/app/components/GaleriaSlider/GaleriaSlider";

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

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12 py-16 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-serif text-[#4A5D4E]">Galería</h2>
      <GaleriaSlider images={images} />
    </section>
  );
};

export default Galeria;