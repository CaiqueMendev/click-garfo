import { dataMyCartOrder } from "../../data/v-data";

export function TableBuyOrder() {
  return (
    <div className="w-full overflow-x-auto mt-8">
      <table className="min-w-[600px] w-full border-collapse border rounded-md overflow-hidden">
        <thead className="text-left bg-gray-100">
          <tr>
            <th className="p-3">Itens</th>
            <th className="p-3">Título</th>
            <th className="p-3">Preço</th>
            <th className="p-3">Quantidade</th>
            <th className="p-3">Total</th>
            <th className="p-3">Remover</th>
          </tr>
        </thead>
        <tbody>
          {dataMyCartOrder.map((item, index) => (
            <tr key={index} className="border-b border-gray-500">
              <td className="p-3">
                <div className="mt-2">
                  <img
                    src={item.img}
                    alt={item.food}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </div>
              </td>
              <td className="p-3">{item.food}</td>
              <td className="p-3">{item.price}</td>
              <td className="p-3">{item.quantity}</td>
              <td className="p-3">{item.total}</td>
              <td className="p-3">
                <button className="text-red-500 cursor-pointer hover:underline">
                  {item.remove}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
