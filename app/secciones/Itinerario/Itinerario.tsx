import HorarioCard from "@/app/components/Cards/HorarioCard/HorarioCard"

const Itinerario = () =>{
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12 py-16 px-4 md:px-0">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-[#4A5D4E]">Itinerario del día</h2>
                <p className="text-lg md:text-xl text-gray-600 font-light">Vive con nosotros cada instante</p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-4xl">
                <HorarioCard 
                    hora="4:30pm"
                    text="Llegada de invitados · Bienvenida con música"
                />
                <HorarioCard 
                    hora="5:00pm"
                    text="Ceremonia religiosa · Capilla del Recuerdo"
                />
                <HorarioCard 
                    hora="6:30pm"
                    text="Cóctel de bienvenida y jardín"
                />
                <HorarioCard 
                    hora="8:30pm"
                    text="Banquete & Brindis"
                />
                <HorarioCard 
                    hora="10:30pm"
                    text="Baile, sorpresas y celebración hasta el final"
                />
            </div>
        </section>
    )
}

export default Itinerario