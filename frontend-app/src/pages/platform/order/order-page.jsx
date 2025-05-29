import { OrderTable } from "../../../components/ui/c-order-table";

export default function OrderPage() {
    const typeOrder = ["Pendente", "Cancelado", "Em preparo", "Em entrega", "Entregue"];

    return (
        <section className="mt-6 max-w-[1440px] mx-auto p-8 lg:p-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#E67E22]">Pedidos</h1>

            <div className="mt-6 p-4">
                <h3 className="text-[#1B1B1B] text-xl mb-4 font-medium">Filtros</h3>

                <div className="flex flex-col lg:flex-row flex-wrap gap-4">
                    <input
                        className="p-2 border border-[#D9D9D9] rounded-md focus:outline-[#E67E22] transition"
                        type="number"
                        placeholder="Filtrar por ID do pedido"
                    />

                    <input
                        className="p-2 border border-[#D9D9D9] rounded-md focus:outline-[#E67E22] transition"
                        type="text"
                        placeholder="Filtrar por nome do cliente"
                    />

                    <select
                        className="p-2 border border-[#D9D9D9] rounded-md text-gray-700 focus:outline-[#E67E22] transition"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Filtrar por status
                        </option>
                        {typeOrder.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-8">
                <OrderTable />
            </div>
        </section>
    );
}
