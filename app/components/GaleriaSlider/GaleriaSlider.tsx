"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GaleriaSliderProps {
  images: string[];
}

const GaleriaSlider: React.FC<GaleriaSliderProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full pb-10" // Padding bottom for pagination bullets
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center h-full">
            <div
              className="w-full h-full cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img

            src={selectedImage}
            alt="Imagen ampliada"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default GaleriaSlider;