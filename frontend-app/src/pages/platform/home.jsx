import Banner from "/Banner.svg";

export default function Home() {
    return (
        <section className="relative">
            <div className="max-w-[1440px] mx-auto p-8 lg:p-0">
                <div>
                
                </div>
                <div className="absolute top-20 right-80 left-0 bottom-0">
                    <img src={Banner} className="w-full h-64" alt="" />
                </div>
            </div>
        </section>
    )
}