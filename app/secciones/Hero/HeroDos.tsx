'use client'; // Súper importante: al usar interactividad (hooks), este componente debe ser un Client Component
import Countdown from '@/app/components/Countdown/Countdown';
import { useState, useRef } from 'react';

const HeroDos = () => {
    const [isMuted, setIsMuted] = useState(true); // Empezamos muteados (por buenas prácticas y bloqueos del navegador)
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        if (videoRef.current) {
            // Invertimos la propiedad nativa del video
            videoRef.current.muted = !videoRef.current.muted;
            // Actualizamos el estado de React para cambiar el ícono del botón
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* ETIQUETA DE VIDEO NATIVA CON REF */}
            <video
                ref={videoRef}
                src="/videos/video-novios.mp4"
                autoPlay
                loop
                muted // Obligatorio al inicio; los navegadores bloquean el autoplay si el video tiene sonido
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Capa de contraste negra por encima del video */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <div className="flex flex-col text-white justify-center items-center text-center px-4">
                    <p className="uppercase tracking-widest text-sm mb-2">Nos casamos</p>
                    <h1 className="text-white text-6xl md:text-[8rem] font-serif leading-none">
                        Luis & Lulu
                    </h1>
                    <p className="text-xl mt-4 font-light">Octubre - 2026</p>

                    <div className="mt-8 md:mt-12 w-full">
                        <Countdown />
                    </div>
                </div>


            </div>

            {/* BOTÓN DE MUTE / UNMUTE (Posicionado abajo a la derecha) */}
            <button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 shadow-lg border border-white/10"
                title={isMuted ? "Activar sonido" : "Silenciar"}
            >
                {isMuted ? (
                    // Ícono de bocina silenciada (SVG nativo)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                ) : (
                    // Ícono de bocina con sonido (SVG nativo)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                )}
            </button>

        </section>
    );
};

export default HeroDos;