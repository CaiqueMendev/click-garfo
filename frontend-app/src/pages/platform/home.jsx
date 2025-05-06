import { Header } from "../../components/home/c-header";
import { PopularCategorys } from "../../components/home/c-popular-categorys";
import { dataCategory, dataOrderFood, dataSalesOff } from "../../data/v-data";
import Banner from "/Banner.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CardRequests } from "../../components/home/c-card-requests";
import { Heart, ShoppingCart } from "lucide-react";
import { SalesOff } from "../../components/home/c-sales-off";

export default function Home() {
  return (
    <section className="relative">
      <div className="max-w-[1500px] mx-auto px-4 py-6 lg:px-2">
        <Header />
        <div className="w-full mt-6 gap-6 rounded-lg flex flex-col md:flex-row">
         <div className="hidden lg:flex w-full rounded-lg h-full">
         <img
            src={Banner}
            className="w- h-64 object-cover rounded-lg"
            alt="Banner promocional"
          />
         </div>
          <div className="max-h-64 overflow-y-auto pr-2 custom-scroller">
            <h1 className="font-semibold text-2xl text-[#1B1B1B] mb-4">Conheça todas as ofertas na plataforma | <span className="font-bold text-[#E67E22]">50% OFF</span></h1>
            {dataSalesOff.map((item, index) => {
              return (
                <div key={index} className="w-full mt-6 gap-6 rounded-lg overflow-hidden flex flex-col md:flex-row">
                  <SalesOff img={item.img} title={item.title} description={item.description}  />
                </div>
              )
            })}
          </div>
        </div>
        <section className="mt-8">
          <h2 className="font-semibold text-2xl text-[#E67E22] mb-4">
            Categorias Populares
          </h2>
          <Swiper
            spaceBetween={12}
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
        <section className="mt-8">
            <h2 className="font-semibold text-2xl text-[#E67E22] mb-4">
              Mais pedidos
            </h2>
            <Swiper 
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {slidesPerView: 1},
              1024: {slidesPerView: 3},
            }}
            modules={[Pagination]}>
              {dataOrderFood.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CardRequests like={<Heart size={24} />} img={item.img} title={item.title} description={item.description} price={item.price} icon={<ShoppingCart size={24} />} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
        </section>
      </div>
    </section>
  );
}
