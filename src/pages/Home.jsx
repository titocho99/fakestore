import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();
  const [buscar, setBuscar] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setBuscar(e.target.value);  
  };

  const results = !buscar
    ? products
    : products.filter((dato) => dato.title.toLowerCase().includes(buscar));

  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <h1 className="flex font-extrabold justify-center text-2xl ">Tienda en linea</h1>
      {loading && <p>Cargando...</p>}
      {!loading && (
        <>
          <div>
            <label className="font-bold">Buscar producto </label>
            <input
              autoFocus
              type="text"
              className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={buscar}
              placeholder="Producto"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {results.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
