import { TableBuyOrder } from "../../components/cart-order/table-buy-order";

export function CartOrder() {
    return (
        <section className="max-w-[1400px] mx-auto px-4 py-6 lg:px-2 mt-8 lg:mt-0">
            <article className="flex flex-col gap-2">
                <h1 className="text-2xl lg:text-3xl font-semibold text-[#E67E22]">Meu Carrinho</h1>
                <p className="text-gray-500 text-sm lg:text-base">
                Revise seus itens antes de finalizar o pedido. Aqui você pode ajustar quantidades, remover produtos e conferir o total da sua refeição. Tudo pronto para matar a sua fome!
                </p>
            </article>
            <main>
                <TableBuyOrder />
                <div className="mt-8">
                    <h1 className="text-xl text-[#E67E22] mb-0.5">Pague pelo site</h1>
                    <div className="h-1 w-36 rounded-md bg-[#E67E22]"></div>
                </div>
            </main>
        </section>
    )
}