import { Link } from "react-router-dom";
import { useCartContext } from "../provider/CartProvider";

const ProductItem = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert("Producto añadido a carrito");
  };
  

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white p-4 w-80 items-center rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 ">
      <img
        src={product.image}
        className="w-24 h-24 object-cover"
        alt={product.title}
      />
      
      <h1>{product.title}</h1>
      <span>${product.price}</span>
      <button className=" mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={addToCart}>
        Añadir a carrito
      </button>
      
      <Link to="/detalle" state={product.id}>
        <span className="text-blue-500">Ver detalles</span>
      </Link>
    </div>
  );
};

export default ProductItem;
