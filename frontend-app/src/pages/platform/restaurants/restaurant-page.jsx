import { Star } from "lucide-react";
import { Header } from "../../../components/restaurants/c-header";
import { AboutProfile } from "../../../components/restaurants/c-about-profile";

export default function RestaurantPage() {
    return (
        <section className="max-w-[1400px] p-8 lg:p-0 mx-auto">
            <Header />
            <div className="w-full rounded-lg h-full">
                <img src="/caminho_imagem.jpg" alt="" className="w-full h-full rounded-2xl" />
            </div>
            <AboutProfile />
            
        </section>
    )
}