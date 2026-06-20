import HistoriaCard from "@/app/components/Cards/HistoriaCard/HistoriaCard"

const Historia = () =>{
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12 py-16 px-4 md:px-0">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-[#4A5D4E]">Nuestra Historia</h2>
                <p className="text-lg md:text-xl text-gray-600 font-light">Un camino tejido con amor</p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-4xl">
                <HistoriaCard
                    year={2019}
                    title="Primer encuentro"
                    text="Un café en París y una conversación que nunca terminó"
                />
                <HistoriaCard
                    year={2022}
                    title="Viaje inolvidable"
                    text="En las montañas de los Alpes, supimos que era para siempre."
                />
                <HistoriaCard
                    year={2025}
                    title="Compromiso"
                    text="Un atardecer mágico, un sí con el alma." 
                />
                <HistoriaCard
                    year={2026}
                    title="El gran día"
                    text="El comienzo de nuestra historia eterna juntos."
                />
            </div>
        </section>
    )
}

export default Historia