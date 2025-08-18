import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  const { products } = useContext(UserContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product: any) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center"
            >
              {product.image && (
               <Link to={`/singleproduct/${product._id}`}>
               <img
                 src={product.image}
                 alt={product.name}
                 className="w-full h-48 object-cover rounded-lg mb-4"
               />
             </Link>
              )}
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.discountedPrice}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
