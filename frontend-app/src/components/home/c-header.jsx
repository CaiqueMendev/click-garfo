import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { SidebarCart } from "../ui/c-sidebar-cart";

export function Header() {
  const [openSheetCart, setOpenSheetCart] = useState(false);

  function searchProducts(event) {
    const value = event.target.value;
    console.log(value);
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
          <input
            onChange={searchProducts}
            type="search"
            placeholder="Pesquisar..."
            className="flex-1 outline-none text-sm"
          />
          <Search size={18} className="text-[#E67E22] ml-2" />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpenSheetCart(true)}
            className="cursor-pointer"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart size={24} className="text-[#E67E22]" />
          </button>

          {openSheetCart && (
            <div className="fixed top-0 right-0 z-50">
              <SidebarCart
                title="Restaurante Exemplo"
                order="Pedido 1"
                price="R$ 49,90"
                quantity="1x"
                subtotal="49,90"
                total="5,00"
                total_value="54,90"
                onClose={() => setOpenSheetCart(false)}
              />
            </div>
          )}

          <h1 className="text-lg lg:text-xl font-semibold text-end">
            Olá, <span className="text-[#E67E22]">Gustavo</span> 👋
          </h1>
        </div>
      </div>
    </section>
  );
}
  