const DetalleDiaCard = ({imagenSrc, title, text}: {imagenSrc:string, title:string, text:string}) =>{
    return (
        <article className="flex flex-col gap-0 w-full sm:w-[19rem] h-auto min-h-[25rem] bg-[#F4F6F0] border border-[#8A9A86]/30 rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1">
            <div className="w-full h-[15rem]">
                <img src={imagenSrc} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-2 p-5 text-center flex-grow">
                <h3 className="font-serif text-2xl text-[#4A5D4E]">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
        </article>
    )
}

export default DetalleDiaCard