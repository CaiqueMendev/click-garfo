import { X } from "lucide-react";

export function SidebarCart({title, order, price, quantity, subtotal, total, total_value, onClose}) {
    return (
        <aside className="h-screen bg-white w-1/2 p-4 rounded-l-md relative">
            <div className="absolute top-4 right-4 bottom-0">
                <button aria-label="Fechar carrinho" onClick={onClose}>
                <X className="text-[#E67E22]" size={24} />
                </button>
            </div>
            <div className="flex flex-col justify-between gap-2">
            <h6 className="font-light text-[#1B1B1B] text-sm lg:text-base">Seu pedido em</h6>
            <h1 className="font-medium text-[#1B1B1B] text-2xl lg:text-3xl">{title}</h1>
            <div className="flex flex-col gap-2 lg:flex-row justify-center lg:justify-around">
            <p className="font-light text-[#1B1B1B] text-sm lg:text-base">{order}</p>
            <div className="flex flex-col gap-2">
            <p className="font-medium text-black text-sm lg:text-base">{price}</p>
            <p>{quantity}</p>
            </div>
            </div>
            <div className="flex flex-col gap-2">
            <div className="flex items-center justify-around">
                <p className="text-sm lg:text-base text-[#1B1B1B]/70 font-normal">Subtotal</p>
                <p className="text-sm lg:text-base text-[#1b1b1b]/70 font-normal">R$ {subtotal}</p>
            </div>
            <div className="flex items-center justify-around">
                <p className="text-sm lg:text-base text-[#1B1B1B]/70 font-normal">Total do serviço</p>
                <p className="text-sm lg:text-base text-[#1b1b1b]/70 font-normal">R$ {total}</p>
            </div>
            <div className="flex items-center justify-around">
                <p className="text-sm lg:text-base text-[#1B1B1B]/70 font-normal">Taxa de Entrega</p>
                <p className="text-sm lg:text-base text-[#1b1b1b]/70 font-normal">R$ {total_value}</p>
            </div>
            </div>
            <div className="flex items-center flex-col justify-center gap-2">
             <div className="flex items-center justify-around">
             <p className="text-sm lg:text-base font-bold text-black">Total</p>
             <p className="text-sm lg:text-base font-bold text-black">R$ {total_value}</p>
             </div>
             <button className="w-full rounded-md p-1 bg-[#E67E22] text-white font-medium mb-9">Confirmar o pedido</button>
            </div>  
            </div>
        </aside>
    )
}