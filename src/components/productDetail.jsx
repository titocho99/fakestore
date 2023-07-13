import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useAPI from "../hooks/useAPI";



const ProductDetail = (props) => {
    const [products, setProducts] = useState([]);
  const location = useLocation();
  const state = location.state;
 
  const { getSingleProduct } = useAPI();
 
  useEffect(() => {
    getSingleProduct(state)
      .then((products) => {
        setProducts(products);
        
      })
      .catch((err) => console.error(err));
  }, []);

 

  return (
    <>
    <div className="flex border border-gray-300 shadow-sm rounded-xl p-4 gap-4 m-4 max-w-[800px]">
    <img
      src={products.image}
      className="w-24 h-24 object-cover"
      alt={products.title}
    />
    <h1>{products.title}</h1>
    <span><strong>precio:</strong> ${products.price}</span>
    <p><strong>Descripción:</strong>
    {products.description}</p>
    
  </div>
  <div>
  <Link to="/">
        <span className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regresar</span>
      </Link>
  </div>
  </>
  );
};

export default ProductDetail;