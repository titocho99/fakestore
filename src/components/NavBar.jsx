import { Link } from "react-router-dom";
import { useCartContext } from "../provider/CartProvider";

const NavBar = () => {

    const {
        state: { cart, totalItems  },dispatch
      } = useCartContext();
  return (
    <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
      <Link to="/">
        <span>FakeStore</span>
      </Link>
      <Link to="/carrito">
        <span className=" flex justify-end">Carrito:   <strong>  Articulos en Carrito( {totalItems})</strong></span>
      </Link>
      
    </nav>
  );
};

export default NavBar;