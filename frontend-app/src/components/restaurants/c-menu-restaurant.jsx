export function MenuRestaurant({img, title, description, price}) {
    return (
        <section className="mt-10">
        <h1 className="text-2xl lg:text-3xl text-black font-medium">Nome do restaurante</h1>
        <nav className="mt-10">
        <div className="bg-white p-4 rounded-lg">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <figure>
                <img src={img} alt="" className="w-32 h-32 rounded-md" />
            </figure>
            <article className="flex flex-col">
                <h1 className="text-start text-[#1B1B1B]">{title}</h1>
                <p className="text-sm lg:text-base text-[#1B1B1B]/50 max-w-[300px] text-center lg:text-start">{description}</p>
                <p className="text-black text-sm lg:text-base font-semibold text-center lg:text-start">{price}</p>
            </article>
            </div>
        </div>
        </nav>
        </section>
    )
}