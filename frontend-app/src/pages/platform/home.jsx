import { Sidebar } from "../../components/sidebar";
import Banner from "/Banner.svg";

export default function Home() {
    return (
        <section className="relative">
           <Sidebar />
            <div className="max-w-[1440px] mx-auto p-8 lg:p-0">
                <div className="absolute top-12 right-0 left-0 bottom-0">
                    <img src={Banner} className="w-full h-60" alt="" />
                </div>
            </div>
        </section>
    )
}