import Image from 'next/image';
import Countdown from '@/app/components/Countdown/Countdown';

const Hero = () => {
    return (

        // Contenedor principal relativo que ocupa toda la pantalla (h-screen)
        <section className="relative w-full h-screen overflow-hidden">

            {/* COMPONENTE DE IMAGEN OPTIMIZADO DE NEXT.JS */}
            <Image
                src="/images/novios/novios-7.avif" // Reemplaza por el nombre exacto de tu imagen principal
                alt="Luis y Lulu en la playa"
                fill // Hace que la imagen llene todo el contenedor padre
                priority // CRÍTICO: Le dice al navegador que cargue esta imagen de inmediato (LCP)
                className="object-cover object-center" // Equivalente a bg-cover bg-center
                sizes="100vw" // Optimiza la entrega dependiendo del tamaño de pantalla
            />

            {/* Capa de contraste negra por ENCIMA de la imagen (Z-index superior) */}
            <div className="absolute inset-0 bg-black/50 flex items-start md:items-center justify-center z-10 pt-24 md:pt-0">
                <div className="flex flex-col text-white justify-center items-center text-center px-4 w-full">
                    <p className="uppercase tracking-widest text-xs md:text-sm mb-2">Nos casamos</p>
                    <h1 className="text-white text-7xl md:text-[8rem] font-serif leading-none mt-2">
                        Luis & Lulu
                    </h1>
                    <p className="text-lg md:text-xl mt-4 md:mt-6 font-light">Octubre - 2026</p>
                    <p className="italic text-base md:text-lg mt-2 text-gray-200">
                        "Donde comienza nuestra historia eterna"
                    </p>

                    <div className="mt-8 md:mt-12 w-full">
                        <Countdown />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;