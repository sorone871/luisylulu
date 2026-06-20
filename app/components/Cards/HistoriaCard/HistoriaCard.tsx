
const HistoriaCard = ({year, title, text}: {year:number, title:string, text:string}) =>{
    return(
        <article className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4 md:gap-9 bg-[#F4F6F0] border border-[#8A9A86]/30 p-6 md:p-8 rounded-3xl shadow-md transition-transform hover:-translate-y-1">
            <div className="text-[#8A9A86] text-4xl md:text-5xl font-serif w-full md:w-[20%] flex justify-center items-center border-b md:border-b-0 md:border-r border-[#8A9A86]/20 pb-4 md:pb-0 md:pr-4">
                {year}
            </div>

            <div className="w-full md:w-[80%] flex flex-col justify-center items-center md:items-start gap-2 text-center md:text-left pt-2 md:pt-0">
                <h3 className="text-xl md:text-2xl font-semibold text-[#4A5D4E]">{title}</h3>
                <p className="text-base md:text-lg text-gray-600">{text}</p>
            </div>
        </article>
    )
}

export default HistoriaCard