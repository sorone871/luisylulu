"use client";

import React, { useState, useEffect } from 'react';
import Galeria from '@/app/secciones/Galeria/Galeria';

// Nombre de la función cambiado a Canva
export default function Canva() {
    // Recursos multimedia
    const FOTO_PORTADA = "/images/novios/novios-7.avif";
    const FOTO_SOBRE = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/ffe0ced30b5bca3f7bbf5d3904f48191.jpg";
    const FOTO_TRIPTICO_1 = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/baa765748af37ca74131b27ab6e38a6a.jpg";
    const FOTO_TRIPTICO_2 = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/a8bf7de49d719dc55837ee5211e28b12.jpg";
    const FOTO_TRIPTICO_3 = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/f5002ba4484bcf1d0156b861795a9a81.jpg";
    const FOTO_CIVIL = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/94840bf4184829b718ed5a2145403ea7.jpg";
    const FOTO_RECEPCION = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/f5002ba4484bcf1d0156b861795a9a81.jpg";
    const FOTO_RECEPCION2 = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/a8bf7de49d719dc55837ee5211e28b12.jpg";
    const FOTO_MANOS = "/images/novios/novios-3.avif";

    // Marcos e ilustraciones
    const MARCO_FLORAL = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/701520944b51aa8930b666f25f44014f.png";
    const CORAZON_SELLO = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/7c481025d009efb415787a888ad1bf3e.png";
    const HOJA_VERDE = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/2c2615ed5cba44b586b26221c0bd181f.png";
    const ANILLOS_ICON = "https://smimmireles.my.canva.site/tenemos-el-honor-de-invitarte-a-nuestra-boda/_assets/media/f5a0d1125ccb8e9b442d7a36a2f9f959.png";

    // Imagen de la máscara solicitada
    const MASCARA_URL = "https://tailwindcss.com/_next/static/media/mask.0n3_1y7tpw5g7.png";

    // Lógica del contador regresivo (Sábado 3 de Octubre 2026)
    const [timeLeft, setTimeLeft] = useState({ dias: 63, horas: 11, minutos: 10, segundos: 50 });

    useEffect(() => {
        const targetDate = new Date("2026-10-03T19:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    segundos: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen font-sans flex flex-col items-center selection:bg-emerald-100 bg-[#eef1eb]">

            {/* Fuentes de Google */}
            <link
                href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />

            <style>{`
        .font-script { font-family: 'Alex Brush', cursive; }
        .font-serif-title { font-family: 'Cinzel', serif; }
        .font-sans-clean { font-family: 'Montserrat', sans-serif; }

        /* Textura de Papel Rugoso / Artesanal */
        .papel-artesanal {
          background-color: #e4ebd9;
          background-image: 
            radial-gradient(rgba(45, 64, 43, 0.08) 1px, transparent 1px),
            radial-gradient(rgba(45, 64, 43, 0.05) 1px, #e4ebd9 1px);
          background-size: 8px 8px, 12px 12px;
          background-position: 0 0, 4px 4px;
        }

        /* Aplicación de la máscara con la URL de Tailwind */
        .foto-mask-url {
          mask-image: url("${MASCARA_URL}");
          -webkit-mask-image: url("${MASCARA_URL}");
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
        }
      `}</style>



            {/* Contenedor del resto de la invitación con fondo propio */}
            <div className="relative w-full flex flex-col items-center px-0 md:px-4">

                {/* Fondo desenfocado y elegante para escritorio detrás de la tarjeta */}
                <div
                    className="hidden md: absolute inset-0 bg-cover bg-center bg-fixed opacity-30 blur-md scale-105"
                    style={{ backgroundImage: `url(${FOTO_PORTADA})` }}
                />
                <div className="hidden md: absolute inset-0 bg-gradient-to-b from-[#f4f7f0]/80 to-[#e4ebd9]/90" />

                {/* Contenedor principal de la invitación (Tarjeta) */}
                <div className="w-full max-w-[480px] md:max-w-[700px] lg:max-w-[850px] bg-white/95 md:backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:rounded-[40px] overflow-hidden flex flex-col items-center border-0 md:border md:border-white/50 relative pb-2 mb-0 md:mb-16 transition-all duration-300 z-20 -mt-16 md:-mt-32">

                    {/* ================= PORTADA DENTRO DE LA TARJETA (FOTO MASK) ================= */}
                    <section className="w-full px-6 md:px-10 pt-8 md:pt-12 pb-4 flex flex-col items-center text-center">
                        {/* Foto de portada con máscara scaling en PC */}
                        <div
                            className="w-full h-64 md:h-96 lg:h-[450px] bg-cover bg-center mb-6 foto-mask-url transition-all"
                            style={{ backgroundImage: `url(${FOTO_PORTADA})` }}
                        />

                        <h1 className="font-serif-title text-3xl md:text-4xl tracking-[0.2em] text-stone-800">
                            LUIS <span className="font-script text-4xl md:text-5xl text-stone-700 font-normal lowercase">&amp;</span> LULU
                        </h1>

                        <p className="font-sans-clean text-xs md:text-sm text-stone-600 mt-4 tracking-wide font-medium">
                            Dale play para escuchar nuestra canción
                        </p>

                        {/* Reproductor de Audio Simulado */}
                        <div className="flex items-center gap-4 text-stone-700 text-sm md:text-base mt-3">
                            <button className="hover:text-stone-900 transition-colors">♡</button>
                            <button className="hover:text-stone-900 transition-colors">⏮</button>
                            <button className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs shadow-md">▶</button>
                            <button className="hover:text-stone-900 transition-colors">⏸</button>
                            <button className="hover:text-stone-900 transition-colors">⚙</button>
                        </div>
                    </section>


                    {/* ================= 2. CARTA CON MARCO Y TARJETA SUPERPUESTA ================= */}
                    <section className="w-full px-6 py-4 flex flex-col items-center">
                        {/* 1. Imagen base del Sobre / Marco Floral (Atrás) */}
                        <div className="relative w-full max-w-xs flex justify-center items-center z-0">
                            <img
                                src={MARCO_FLORAL}
                                alt="Marco Floral"
                                className="w-full max-w-[280px] opacity-90 pointer-events-none"
                            />

                            {/* Sello de Corazón al centro del sobre */}
                            <img
                                src={CORAZON_SELLO}
                                alt="Corazón Sello"
                                className="absolute top-55 left-43 -translate-x-1/2 -translate-y-1/2 w-10 opacity-90 drop-shadow-md z-10 pointer-events-none"
                            />
                        </div>

                        {/* 2. Tarjeta Verde "Con la Bendición..." (Encima del sobre) */}
                        {/* El -mt-16 hace que suba y monte sobre la imagen del sobre */}
                        <div className="relative w-full papel-artesanal rounded-2xl p-6 text-center border border-[#d2dec3] shadow-lg overflow-hidden -mt-16 z-10">

                            {/* Hoja Esquina Superior Izquierda */}
                            {/* <img 
              src={HOJA_VERDE} 
              alt="Hoja izquierda" 
              className="absolute top-10 left-0 w-12 pointer-events-none opacity-80"
            /> */}

                            {/* Hoja Esquina Superior Derecha */}
                            <img
                                src={HOJA_VERDE}
                                alt="Hoja derecha"
                                className="absolute top-10 right-1 w-12 pointer-events-none opacity-80 rotate-[220deg]"
                            />

                            <div className="relative z-10">
                                <h2 className="font-script text-3xl md:text-4xl text-[#1f3a1f] my-2 leading-tight">
                                    Con la Bendición de Dios <br /> &amp; Nuestros padres
                                </h2>

                                <div className="space-y-1 text-[11px] font-sans-clean uppercase tracking-widest text-[#2d402b] font-semibold my-4">
                                    <p>MARIA DE LURDES CAMPOS VILLEGAS</p>
                                    <p>CRESPIN MIRELES MARTINEZ</p>
                                    <div className="h-2"></div>
                                    <p>MA. FRANCISCA DORADO ESCOBEDO</p>
                                    <p>JUANA MARIA GOYTIA DORADO</p>
                                    <p>JUAN DELFINO ONTIVEROS HERNANDEZ</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hoja colocada exactamente debajo de la sección 2 */}
                    <img
                        src={HOJA_VERDE}
                        alt="Hoja izquierda"
                        className="absolute top-180 rotate-[220deg] invert-100 scale-x-[-1] left-0 lg:top-235 w-12 pointer-events-none opacity-80"
                    />


                    {/* ================= 4. TRÍPTICO DE FOTOS DE PROPUESTA ================= */}
                    <Galeria />



                    {/* ================= 5. TEXTO DE INVITACIÓN Y FECHA ================= */}
                    <section className="w-full px-6 md:px-10 text-center my-4 flex flex-col items-center">
                        <h3 className="font-sans-clean text-xs md:text-sm tracking-[0.2em] text-stone-800 font-medium max-w-xs md:max-w-sm leading-relaxed uppercase">
                            TENEMOS EL HONOR DE INVITARTE A<br />NUESTRA BODA
                        </h3>

                        {/* Bloque Fecha */}
                        <div className="flex items-center justify-center gap-6 md:gap-8 my-6 text-stone-900">
                            <span className="font-sans-clean text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium">SABADO</span>
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] md:text-xs text-emerald-800">♥</span>
                                <span className="font-serif-title text-4xl md:text-5xl font-semibold leading-none">03</span>
                            </div>
                            <span className="font-sans-clean text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium">OCTUBRE</span>
                        </div>

                        <p className="font-sans-clean text-xs md:text-sm tracking-[0.25em] text-stone-700 uppercase mb-4">
                            2026
                        </p>

                        <img src={ANILLOS_ICON} alt="Anillos" className="w-15 md:w-22 opacity-80 my-2" />
                    </section>


                    {/* ================= 6. CEREMONIA CIVIL ================= */}
                    <section className="w-full px-4 md:px-10 my-2">
                        <div className="papel-artesanal rounded-2xl p-5 md:p-7 text-center border border-[#d2dec3] shadow-sm flex flex-col items-center">
                            <h4 className="font-sans-clean text-xs md:text-sm tracking-[0.2em] font-semibold text-[#1f3a1f] uppercase mb-1">
                                CEREMONIA CIVIL
                            </h4>

                            <p className="font-sans-clean text-[11px] md:text-xs tracking-wider text-[#2d402b] uppercase font-medium my-1">
                                JARDIN LA PALAPA<br />
                                HACIENDA LOS ANGELES
                            </p>

                            <span className="font-sans-clean text-xs md:text-sm font-semibold text-[#1f3a1f] my-2 block">
                                7:00 P.M
                            </span>

                            <div className="w-full h-66 md:h-100 rounded-lg overflow-hidden shadow-sm mt-2">
                                <img src={FOTO_CIVIL} alt="Jardín La Palapa" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </section>


                    {/* ================= 7. RECEPCIÓN Y UBICACIÓN ================= */}
                    <section className="w-full px-4 md:px-10 my-2">
                        <div className="papel-artesanal rounded-2xl p-5 md:p-7 text-center border border-[#d2dec3] shadow-sm flex flex-col items-center">
                            <h4 className="font-sans-clean text-xs md:text-sm tracking-[0.2em] font-semibold text-[#1f3a1f] uppercase mb-1">
                                RECEPCIÓN
                            </h4>

                            <p className="font-sans-clean text-[11px] md:text-xs tracking-wider text-[#2d402b] uppercase font-medium my-1">
                                HACIENDA LOS ANGELES
                            </p>

                            <span className="font-sans-clean text-xs md:text-sm font-semibold text-[#1f3a1f] my-2 block">
                                8:30 P.M.
                            </span>

                            <div className="w-full h-66 md:h-100 rounded-lg overflow-hidden shadow-sm mt-2">
                                <img src={FOTO_RECEPCION} alt="Hacienda Los Ángeles" className="w-full h-full object-fill" />
                            </div>
                        </div>

                        <p className="font-sans-clean text-[10px] md:text-xs text-stone-600 text-center mt-3 tracking-wide">
                            Fraccionamiento la Noria, 27054 Torreón, Coah.
                        </p>
                    </section>


                    {/* ================= 8. FOTO MANOS Y REGRESIVA ================= */}
                    <section className="w-full px-6 md:px-10 mt-4 flex flex-col items-center text-center">
                        <div className="w-full h-80 md:h-100 rounded-xl overflow-hidden shadow-sm mb-6">
                            <img src={FOTO_MANOS} alt="Anillos en las manos" className="w-full h-full object-cover" />
                        </div>

                        <p className="font-sans-clean text-xs md:text-sm text-[#2b5220] font-medium mb-3">
                            Faltan
                        </p>

                        {/* Números del contador */}
                        <div className="flex items-center justify-center gap-2 md:gap-3 text-[#22481b] font-serif-title my-1">
                            <span className="text-3xl md:text-4xl font-medium">{timeLeft.dias}</span>
                            <span className="text-xl md:text-2xl">:</span>
                            <span className="text-3xl md:text-4xl font-medium">{String(timeLeft.horas).padStart(2, '0')}</span>
                            <span className="text-xl md:text-2xl">:</span>
                            <span className="text-3xl md:text-4xl font-medium">{String(timeLeft.minutos).padStart(2, '0')}</span>
                            <span className="text-xl md:text-2xl">:</span>
                            <span className="text-3xl md:text-4xl font-medium">{String(timeLeft.segundos).padStart(2, '0')}</span>
                        </div>

                        {/* Etiquetas del contador */}
                        <div className="flex items-center justify-center gap-6 md:gap-8 text-[9px] md:text-[10px] font-sans-clean tracking-[0.2em] text-[#3d6335] uppercase font-semibold mt-1">
                            <span>DÍAS</span>
                            <span>HORAS</span>
                            <span>MINUTOS</span>
                            <span>SEGUNDOS</span>
                        </div>
                    </section>

                    {/* ================= INICIO NUEVA SECCIÓN: VESTIMENTA E INFO ================= */}
                    <section className="w-full px-4 md:px-10 my-6">
                        <div className="relative w-full papel-artesanal rounded-3xl p-8 text-center border border-[#d2dec3] shadow-lg overflow-hidden">

                            {/* Hojas decorativas en las esquinas */}
                            <img src={HOJA_VERDE} alt="Deco" className="absolute -top-2 -left-2 w-16 opacity-70 rotate-45 pointer-events-none" />
                            <img src={HOJA_VERDE} alt="Deco" className="absolute -bottom-2 -right-2 w-16 opacity-70 -rotate-135 pointer-events-none scale-x-[-1]" />

                            <div className="relative z-10 space-y-8">

                                {/* Bloque 1: Código de Vestimenta */}
                                <div className="space-y-3">
                                    <h4 className="font-serif-title text-xl md:text-2xl tracking-[0.1em] text-[#1f3a1f] uppercase">
                                        Código de Vestimenta
                                    </h4>
                                    <div className="h-px w-24 bg-[#a4b48c] mx-auto"></div>
                                    <p className="font-script text-4xl text-[#3d6335]">
                                        Formal
                                    </p>
                                </div>

                                {/* Bloque 2: Colores Reservados */}
                                <div className="space-y-4">
                                    <p className="font-sans-clean text-xs md:text-sm tracking-widest text-[#2d402b] font-semibold uppercase">
                                        Colores reservando no usar
                                    </p>

                                    {/* Círculos de colores con etiquetas */}
                                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-2">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 h-12 rounded-full bg-white border border-stone-300 shadow-inner"></div>
                                            <span className="font-sans-clean text-[10px] md:text-xs text-stone-700 font-medium">Blanco / Claros</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 h-12 rounded-full bg-[#004d3d] shadow-inner"></div>
                                            <span className="font-sans-clean text-[10px] md:text-xs text-stone-700 font-medium">Verde Esmeralda</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 h-12 rounded-full bg-[#b19cd9] shadow-inner"></div>
                                            <span className="font-sans-clean text-[10px] md:text-xs text-stone-700 font-medium">Lila</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Divisor elegante */}
                                <div className="flex items-center justify-center gap-4 text-[#a4b48c]">
                                    <div className="h-px w-full max-w-[100px] bg-current"></div>
                                    <span className="text-xl">🕊️</span>
                                    <div className="h-px w-full max-w-[100px] bg-current"></div>
                                </div>

                                {/* Bloque 3: Eventos y No Niños */}
                                <div className="space-y-6 pt-2">

                                    {/* Eventos con Íconos */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 justify-items-center font-serif-title text-sm md:text-base tracking-widest text-[#1f3a1f] uppercase font-medium mt-4">

                                        {/* Civil */}
                                        <div className="flex flex-col items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#a4b48c] drop-shadow-sm">
                                                <circle cx="9" cy="12" r="5"></circle>
                                                <circle cx="15" cy="12" r="5"></circle>
                                            </svg>
                                            <span>Civil</span>
                                        </div>

                                        {/* Recepción */}
                                        <div className="flex flex-col items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#a4b48c] drop-shadow-sm">
                                                <path d="M2 20h20"></path>
                                                <path d="M5 20V10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10"></path>
                                                <path d="M9 20v-5h6v5"></path>
                                                <path d="M4 10l8-7 8 7"></path>
                                            </svg>
                                            <span>Recepción</span>
                                        </div>

                                        {/* Cena */}
                                        <div className="flex flex-col items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#a4b48c] drop-shadow-sm">
                                                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                                                <path d="M7 2v20"></path>
                                                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                                            </svg>
                                            <span>Cena</span>
                                        </div>

                                        {/* Brindis */}
                                        <div className="flex flex-col items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#a4b48c] drop-shadow-sm">
                                                <path d="M12 15v7"></path>
                                                <path d="M8 22h8"></path>
                                                <path d="M12 15A6 6 0 0 0 18 9V2H6v7a6 6 0 0 0 6 6z"></path>
                                                <path d="M6 5h12"></path>
                                            </svg>
                                            <span>Brindis</span>
                                        </div>

                                    </div>

                                    {/* No Niños */}
                                    <div className="space-y-3 pt-4 pb-2">
                                        <h4 className="font-sans-clean text-sm md:text-base tracking-[0.15em] font-bold text-[#1f3a1f] uppercase">
                                            No Niños
                                        </h4>
                                        <p className="font-sans-clean text-xs md:text-sm text-[#2d402b] leading-relaxed max-w-sm mx-auto">
                                            Amamos a sus pequeños, pero queremos que en este día solo tengan que preocuparse por pasarla increíble.
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                    {/* ================= FIN NUEVA SECCIÓN ================= */}

                    {/* ================= FOOTER ELEGANTE ================= */}
                    <div className="w-full flex justify-center px-4 md:px-10 mt-6 mb-8">
                        <div className="relative w-full max-w-2xl h-80 md:h-[400px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">

                            {/* Imagen de fondo */}
                            <img
                                src="/images/novios/novios-1-thumb.avif"
                                alt="Luis y Lulu"
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradiente sutil en la parte inferior para leer el texto */}
                            <div className="absolute inset-0 "></div>

                            {/* Texto superpuesto (Absolute) */}
                            <div className="absolute  top-25  left-10 w-full flex flex-col items-center text-center z-10 px-4">
                                <p className="font-script text-5xl md:text-7xl text-[#2b4725] drop-shadow-sm">Luis & Lulu</p>
                                <p className="font-sans-clean text-[10px] md:text-xs tracking-[0.25em] text-[#2b4725] uppercase font-bold mt-2">
                                    ¡Te esperamos!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}