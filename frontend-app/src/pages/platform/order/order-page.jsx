import { OrderTable } from "../../../components/ui/c-order-table";

export default function OrderPage() {

    const typeOrder = ["Pendente", "Cancelado", "Em preparo", "Em entrega", "Entregue"]

    return (
        <section className="mt-6 max-w-[1440px] mx-auto p-8 lg:p-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#E67E22]">Pedidos</h1>
            <div className="mt-6">
                <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-center">
                    <div className="flex flex-col lg:flex-row gap-2">
                        <h3 className="text-[#1B1B1B] text-xl">Filtros:</h3>
                        <input className="p-1 border-1 border-[#D9D9D9]/20 rounded-lg" type="number" placeholder="Digite o ID do pedido:" />
                    </div>
                    <div>
                        <input type="text" placeholder="Nome do cliente" />
                    </div>
                    <div>
                        <select name="" id="">
                            {typeOrder.map((item, index) => {
                                const valueIndex = item + 1;
                                return  (
                                    <div key={index}>
                                        <option value={valueIndex}>
                                            {item}
                                        </option>
                                    </div>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <OrderTable />
        </section>
    )
}