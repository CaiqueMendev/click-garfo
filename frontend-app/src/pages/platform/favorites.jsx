import { Header } from "../../components/favorites/c-header";
import { dataOrderFood, dataRestaurantsFood } from "../../data/v-data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CardRequests } from "../../components/favorites/c-card-requests";
import { CardRestaurant } from "../../components/favorites/c-card-restaurant";
import { Heart, Star, ShoppingCart } from "lucide-react";

export default function MyFavorites() {
  return (
    <main className="max-w-[1400px] mx-auto p-8 lg:p-0 mt-8 lg:mt-0">
      <div className="mt-8 mb-8">
        <Header />
      </div>

      <div>
        <h1 className="text-2xl lg:text-3xl text-start text-[#E67E22] font-semibold mb-2">
          Restaurantes
        </h1>

        <Swiper
          spaceBetween={8}
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
        >
          {dataRestaurantsFood.map((item, index) => (
            <SwiperSlide key={index}>
              <CardRestaurant
                img={item.img}
                title={item.title}
                description={item.description}
                stars={<Star size={24} color="#E67E22" />}
                btnText={item.btnText}
                heart={<Heart size={24} color="#E67E22" />}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <section className="mt-8">
          <h2 className="font-semibold text-2xl lg:text-3xl text-[#E67E22] mb-4">
            Pedidos Favoritos
          </h2>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
          >
            {dataOrderFood.map((item, index) => (
              <SwiperSlide key={index}>
                <CardRequests
                  like={<Heart size={36} />}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  icon={<ShoppingCart size={32} />}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </main>
  );
}
