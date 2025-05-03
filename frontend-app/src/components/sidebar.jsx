import { Box, Home, LogOut, User, ShoppingCart, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const routes = [
    {
        icon: Home,
        route: "Início",
        href: "/home"
    },
    {
        icon: UtensilsCrossed,
        route: "Restaurantes",
        href: "/restaurants"
    },
    {
        icon: ShoppingCart,
        route: "Meu carrinho",
        href: "/cart",
    },
    {
        icon: Box,
        route: "Meus favoritos",
        href: "/favorites"
    },
    {
        icon: User,
        route: "Perfil",
        href: "/profile"
    },
    {
        icon: LogOut,
        route: "Sair",
        href: "/logout"
    }
];

export function Sidebar() {

    const location = useLocation();
    const [open, setOpen] = useState(false);


    return (
        <aside className="bg-white p-6 border border-[#E67E22] rounded-r-4xl w-16 sm:w-20 lg:w-56 h-screen">
            <nav className="flex flex-col gap-6 items-start">
                <ul className="flex flex-col justify-start items-start gap-6">
                <div className="hidden md:flex">
                    <img src="/Logo_secondary.svg" alt="" />
                </div>
                    {routes.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href
                        return (
                            <li className="w-full" key={index}>
                                <Link
                                    to={item.href}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-r-2xl transition-colors ${
                                        isActive ? "bg-[#E67E22]/20 text-[#1b1b1b] lg:w-40" : "text-[#333] hover:text-[#E67E22]"
                                    }`}
                                >
                                    <Icon size={20} />
                                    <span className="hidden lg:block">{item.route}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
