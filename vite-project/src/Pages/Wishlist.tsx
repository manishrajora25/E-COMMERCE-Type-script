import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Wishlist: React.FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext) throw new Error("UserContext must be used within UserProvider");

  const { wishlist, removeFromWishlist, addToCart } = userContext;

  if (wishlist.length === 0)
    return <p className="text-center mt-10 text-gray-500">Your wishlist is empty.</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>
      <div className="space-y-4">
        {wishlist.map((item: Product) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-sm"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">₹{item.discountedPrice || item.price}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-2 md:mt-0">
              <button
                onClick={() => addToCart(item)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
