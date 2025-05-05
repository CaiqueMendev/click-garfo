import { Header } from "../../components/home/c-header";
import { PopularCategorys } from "../../components/home/c-popular-categorys";
import { dataCategory } from "../../data/v-data";
import Banner from "/Banner.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <section className="relative">
      <div className="max-w-[1300px] mx-auto px-4 py-6 lg:px-2">
        <Header />
        <div className="w-full mt-6 rounded-lg overflow-hidden hidden md:flex">
          <img
            src={Banner}
            className="w- h-64 object-cover"
            alt="Banner promocional"
          />
        </div>
        <section className="mt-8">
          <h2 className="font-semibold text-2xl text-[#E67E22] mb-4">
            Categorias Populares
          </h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
          >
            {dataCategory.map((item, index) => (
              <SwiperSlide key={index}>
                <PopularCategorys title={item.title} img={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </section>
  );
}
