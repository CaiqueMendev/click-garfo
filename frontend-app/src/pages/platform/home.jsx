import { Header } from "../../components/home/c-header";
import Banner from "/Banner.svg";

export default function Home() {

  return (
    <section className="relative">
      <div className="max-w-[1300px] mx-auto px-4 py-6 lg:px-2">
        <Header />
        {/* Banner */}
        <div className="w-full mt-6 rounded-lg overflow-hidden hidden md:flex">
          <img src={Banner} className="w- h-64 object-cover" alt="Banner promocional" />
        </div>
        <section className="mt-8">
          <h2 className="font-semibold text-2xl text-[#E67E22] mb-4">
            Categorias Populares
          </h2>
          {/* Aqui você pode mapear categorias futuras */}
        </section>
      </div>
    </section>
  );
}
