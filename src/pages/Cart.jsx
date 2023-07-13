import CartItem from "../components/CartItem";
import { useCartContext } from "../provider/CartProvider";

const Cart = () => {
  const {
    state: { cart, totalPrice },dispatch
  } = useCartContext();
  
  return (
    <div>
      <h1 className="flex justify-center text-2xl font-extrabold">Articulos en tu Carrito de Compras</h1>
      <button
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => { dispatch({ type: "CLEAR_CART" });}}
      >
       Limpiar Carrito
      </button>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
        <div className="font-bold text-3xl bg-indigo-600 px-3 py-2 rounded-md text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">TOTAL: ${totalPrice}</div>
        <div className="flex font-bold">
        
        </div>
      </div>
    </div>
  );
};

export default Cart;