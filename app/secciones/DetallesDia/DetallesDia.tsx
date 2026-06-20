import DetalleDiaCard from "@/app/components/Cards/DetallesDiaCard/DetallesDiaCard"

const DetallesDia = () =>{
    return(
        <section className="w-full min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12 py-16 px-4">
             <div className="flex flex-col gap-4 justify-center items-center text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-[#4A5D4E]">Detalles del día</h2>
                <p className="text-xl md:text-2xl font-serif text-gray-600 font-light">Celebración</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center w-full max-w-5xl">
                <DetalleDiaCard
                    imagenSrc="/images/salon.jpg"
                    title="Recepción & Fiesta"
                    text="Hacienda Los Robles 19:00 hrs hasta el amanecer"
                />
                <DetalleDiaCard
                    imagenSrc="/images/vestimenta.jpg"
                    title="Código de vestimenta"
                    text="Elegante / Traje largo. Tonos claros y flores bienvenidas."
                />
            </div>
        </section>
    )
}

export default DetallesDia