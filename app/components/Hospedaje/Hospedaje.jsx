"use client";

import React from 'react';

export default function Hospedaje() {
    const SELLO_DORADO = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/7c481025d009efb415787a888ad1bf3e.png";
    const HOJA_VERDE = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/2c2615ed5cba44b586b26221c0bd181f.png";

    // Ruta a tu PDF en la carpeta /public de Next.js
    const RUTA_PDF = "/docs/hospedaje.pdf";

    return (
        <section className="w-full px-4 md:px-10 my-6 relative z-10 font-sans selection:bg-emerald-100">

            {/* Estilos compartidos de fuentes y textura */}
            <style>{`
        .font-script { font-family: 'Alex Brush', cursive; }
        .font-serif-title { font-family: 'Cinzel', serif; }
        .font-sans-clean { font-family: 'Montserrat', sans-serif; }

        .papel-artesanal {
          background-color: #e4ebd9;
          background-image: 
            radial-gradient(rgba(45, 64, 43, 0.08) 1px, transparent 1px),
            radial-gradient(rgba(45, 64, 43, 0.05) 1px, #e4ebd9 1px);
          background-size: 8px 8px, 12px 12px;
          background-position: 0 0, 4px 4px;
        }
      `}</style>

            {/* Tarjeta con diseño artesanal */}
            <div className="relative papel-artesanal rounded-2xl p-6 md:p-8 text-center border border-[#d2dec3] shadow-md flex flex-col items-center overflow-hidden">

                {/* Sello de Cera Superior */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 drop-shadow-md z-20 pointer-events-none">
                    <img
                        src={SELLO_DORADO}
                        alt="Sello de cera"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Hojas decorativas en las esquinas */}
                <img
                    src={HOJA_VERDE}
                    alt="Decoración floral"
                    className="absolute top-2 right-2 w-10 opacity-70 rotate-[220deg] pointer-events-none"
                />
                <img
                    src={HOJA_VERDE}
                    alt="Decoración floral"
                    className="absolute bottom-2 left-2 w-10 opacity-70 rotate-[40deg] pointer-events-none"
                />

                {/* Título y Subtítulo */}
                <div className="mt-4 mb-2">
                    <h3 className="font-serif-title text-xs md:text-sm tracking-[0.2em] font-semibold text-[#1f3a1f] uppercase mb-1">
                        ¿DÓNDE HOSPEDARSE?
                    </h3>
                    <p className="font-sans-clean text-[10px] md:text-xs tracking-wider text-[#2d402b] uppercase font-medium">
                        Nuestra sugerencia
                    </p>
                </div>

                {/* Ilustración de Cabaña en verde bosque */}
                <div className="my-2 text-[#2d402b] opacity-90">
                    <svg
                        className="w-14 h-14 mx-auto"
                        viewBox="0 0 64 64"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 14 A 4 4 0 0 1 20 8 A 6 6 0 0 0 25 14 Z" strokeWidth="1.2" />
                        <circle cx="43" cy="11" r="0.8" fill="currentColor" stroke="none" />
                        <circle cx="46" cy="15" r="0.6" fill="currentColor" stroke="none" />
                        <path d="M41 18 Q 43 14 41 10 Q 39 8 42 6" strokeWidth="1" strokeDasharray="1.5 1.5" />
                        <path d="M40 22 V 16 H 44 V 26" />
                        <path d="M12 30 L 32 14 L 52 30" strokeWidth="2" />
                        <path d="M32 18 L 32 23" />
                        <rect x="16" y="29" width="32" height="24" rx="2" />
                        <line x1="16" y1="35" x2="48" y2="35" />
                        <line x1="16" y1="41" x2="48" y2="41" />
                        <line x1="16" y1="47" x2="48" y2="47" />
                        <rect x="27" y="37" width="10" height="16" />
                        <circle cx="34" cy="45" r="0.8" fill="currentColor" />
                        <path d="M11 48 L 7 48 L 10 42 L 8 42 L 10 37 L 11 37 L 12 42 L 10 42 L 13 48 Z" />
                        <path d="M53 48 L 49 48 L 52 42 L 50 42 L 52 37 L 53 37 L 54 42 L 52 42 L 55 48 Z" />
                    </svg>
                </div>

                {/* Nombres del lugar */}
                <div className="my-2 space-y-0.5">
                    <h4 className="font-script text-3xl md:text-4xl text-[#1f3a1f] font-normal leading-tight">
                        Las Cabañas
                    </h4>

                    <div className="flex items-center justify-center gap-1.5 pt-0.5">
                        <svg
                            className="w-3.5 h-3.5 text-[#2d402b] shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className="font-script text-2xl md:text-3xl text-[#1f3a1f] leading-none">
                            Hacienda los Angeles
                        </span>
                    </div>
                </div>

                {/* Botón Verde Obscuro */}
                <div className="w-full mt-5 max-w-xs">
                    <a
                        href={RUTA_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-block bg-[#2d402b] text-white font-sans-clean text-[11px] font-medium uppercase tracking-[0.2em] py-3 px-6 rounded-xl shadow-md hover:bg-[#1f3a1f] active:scale-95 transition-all duration-150"
                    >
                        Costos &amp; Reservación
                    </a>
                </div>

            </div>
        </section>
    );
}