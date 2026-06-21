"use client"
import { useState } from "react";

interface ImageItem {
  thumb: string;
  full: string;
}

interface GaleriaGridProps {
  images: ImageItem[];
}

const GaleriaGrid: React.FC<GaleriaGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/5] md:aspect-square"
            onClick={() => setSelectedImage(item.full)}
          >
            <img
              src={item.thumb}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[100]"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaGrid;
