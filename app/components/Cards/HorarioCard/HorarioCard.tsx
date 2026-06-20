
const HorarioCard = ({hora, text}: {hora:string, text:string}) =>{
    return(
        <article className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-4 md:gap-9 bg-[#F4F6F0] border border-[#8A9A86]/30 p-6 rounded-3xl shadow-md transition-transform hover:-translate-y-1">
            <div className="text-[#8A9A86] text-3xl md:text-4xl font-serif w-full md:w-[25%] flex justify-center items-center border-b md:border-b-0 md:border-r border-[#8A9A86]/20 pb-4 md:pb-0 md:pr-4">
                {hora}
            </div>

            <div className="w-full md:w-[75%] flex flex-col justify-center items-center md:items-start gap-1 text-center md:text-left pt-2 md:pt-0">
                <p className="text-lg md:text-xl text-[#4A5D4E] font-medium">{text}</p>
            </div>
        </article>
    )
}

export default HorarioCard