import { Header } from "../../../components/restaurants/c-header";
import { AboutRestaurant } from "../../../components/restaurants/c-about-restaurant";
import { MenuRestaurant } from "../../../components/restaurants/c-menu-restaurant";

export default function RestaurantPage() {
    return (
        <section className="max-w-[1400px] p-8 lg:p-0 mx-auto">
            <Header />
            <div className="w-full rounded-lg h-full">
                <img src="/caminho_imagem.jpg" alt="" className="w-full h-full rounded-2xl" />
            </div>
            <AboutRestaurant />
            <MenuRestaurant />
        </section>
    )
}