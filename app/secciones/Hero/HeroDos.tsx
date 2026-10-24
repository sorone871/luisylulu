'use client';

import { useState, useEffect, useRef } from 'react';

// Declaración de tipos para la API de YouTube
declare global {
    interface Window {
        onYouTubeIframeAPIReady?: () => void;
        YT: any;
    }
}

const HeroDos = () => {
    const [isMuted, setIsMuted] = useState(true);
    const playerRef = useRef<any>(null);

    // ID del video de YouTube: PNcc5N93hdU
    const VIDEO_ID = 'PNcc5N93hdU';

    useEffect(() => {
        // Carga dinámica de la API IFrame de YouTube
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-bg-player', {
                videoId: VIDEO_ID,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    loop: 1,
                    playlist: VIDEO_ID,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    vq: 'hd2160', // Solicita calidad 4K (2160p)
                },
                events: {
                    onReady: (event: any) => {
                        event.target.playVideo();
                        // Fuerza la calidad más alta posible
                        if (typeof event.target.setPlaybackQuality === 'function') {
                            event.target.setPlaybackQuality('hd2160');
                        }
                    },
                },
            });
        };

        return () => {
            window.onYouTubeIframeAPIReady = undefined;
        };
    }, []);

    const toggleMute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute();
                setIsMuted(false);
            } else {
                playerRef.current.mute();
                setIsMuted(true);
            }
        }
    };

    return (
        <section className="relative w-full min-h-[115dvh] md:min-h-screen overflow-hidden bg-black font-sans selection:bg-emerald-900">

            {/* 1. Contenedor de Video de YouTube (Forzado a escala para cubrir la pantalla) */}
            <div className="absolute inset-0  pointer-events-none overflow-hidden z-0 ">
                {/* AQUI PARA EL TAMAÑO DEL VIDEO */}
                <div
                    id="youtube-bg-player"
                    className="
                    w-[200vw] h-[400vh]  
                    md:w-[100%] md:h-[300%]   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
            </div>

            {/* 2. Capa de degradado cinematográfico con espaciado vertical ampliado para móvil */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10 z-10 flex flex-col justify-between items-center px-6 pt-24 pb-16 md:pt-16 md:pb-12 text-white text-center">

                {/* Encabezado Superior */}
                <div className="space-y-1 animate-fade-in">
                    <p className="uppercase tracking-[0.3em] text-[10px] text-stone-300 font-medium">
                        Recién Casados
                    </p>
                    <div className="w-8 h-[1px] bg-stone-300/40 mx-auto mt-2" />
                </div>

                {/* Nombres y Fecha */}
                <div className="flex flex-col items-center my-auto w-full max-w-xs">
                    <h1 className="text-white text-5xl font-serif tracking-wide leading-tight drop-shadow-md">
                        Lulu <span className="font-serif italic font-light text-3xl text-stone-300">&amp;</span> Luis
                    </h1>

                    <p className="text-sm tracking-[0.2em] uppercase font-light text-stone-200 mt-3">
                        03 · Octubre · 2026
                    </p>

                    {/* Mensaje de agradecimiento */}
                    <p className="mt-8 font-serif italic font-light text-lg text-stone-100 drop-shadow-md">
                        Gracias por acompañarnos en el día más especial de nuestras vidas
                    </p>
                </div>

                {/* Flecha indicadora para deslizar */}
                <div className="flex flex-col items-center gap-1 opacity-70 animate-bounce pb-2">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-stone-300 font-light">Desliza</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-stone-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

            </div>

            {/* 3. Botón Flotante para Mute/Unmute */}
            <button
                onClick={toggleMute}
                className="absolute top-[80dvh] md:top-auto md:bottom-6 right-6 z-20 flex items-center gap-2 bg-black/60 hover:bg-black/80 active:scale-95 backdrop-blur-md text-stone-100 px-3.5 py-2 md:px-3 md:py-1.5 rounded-full transition-all duration-300 shadow-2xl border border-white/20"
                aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
                {isMuted ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-stone-200 animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                        <span className="text-[11px] font-medium tracking-wider uppercase text-stone-200">
                            Activar sonido
                        </span>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-emerald-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                        <span className="text-[11px] font-medium tracking-wider uppercase text-stone-200">
                            Silenciar
                        </span>
                    </>
                )}
            </button>
        </section>
    );
};

export default HeroDos;