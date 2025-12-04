import { useEffect, useState } from "react";
import { api } from "./services/api";
import type { Product } from "./types/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get<Product[]>("products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{p.name}</h2>

            <p className="text-gray-700">Preço: R$ {p.price.toFixed(2)}</p>

            <span
              className={`
                inline-block mt-2 px-3 py-1 rounded text-white text-sm 
                ${p.in_stock ? "bg-green-600" : "bg-red-600"}
              `}
            >
              {p.in_stock ? "Em estoque" : "Sem estoque"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
