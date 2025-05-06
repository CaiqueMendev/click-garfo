import { Heart, Star } from "lucide-react";
import { CardRestaurant } from "../../components/restaurants/c-card-restaurant";
import { dataRestaurantsFood } from "../../data/v-data";
import { Header } from "../../components/restaurants/c-header";

export default function Restaurants() {
    return (
        <main className="max-w-[1400px] mx-auto px-4 py-6 lg:px-2 mt-8 lg:mt-0">
          <Header />
         <div className="mb-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {dataRestaurantsFood.map((item, index) => {
                return (
                    <div key={index}>
                        <CardRestaurant heart={<Heart size={32} />} img={item.img} title={item.title} stars={<Star className="text-[#E67E22]" size={36} />} description={item.description} link={item.link} btnText={item.btnText} />
                    </div>
                )
             })}
            </div>
         </div>
        </main>
    )
}