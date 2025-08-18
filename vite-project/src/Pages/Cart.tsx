import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const Cart: React.FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext) throw new Error("UserContext must be used within UserProvider");

  const { cart,removeFromCart } = userContext;

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.discountedPrice* (item.quantity || 1),
    0
  );

  if (cart.length === 0)
    return <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>;

//   const { cart, removeFromCart } = userContext;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item: Product) => (
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
                <p className="text-gray-600">₹{item.discountedPrice}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-2 md:mt-0">
              <button
                onClick={() => decrementQty(item._id)}
                className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              >
                <CiSquareMinus size={24} />
              </button>
              <span className="text-lg font-semibold">{item.quantity || 1}</span>
              <button
                onClick={() => incrementQty(item._id)}
                className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              >
                <CiSquarePlus size={24} />
              </button>
            </div>

            {/* Total per Item */}
            <div className="mt-2 md:mt-0 text-lg font-semibold">
              ₹{item.discountedPrice * (item.quantity || 1)}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item._id)}
              className="mt-2 md:mt-0 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Overall Total */}
      <div className="mt-6 text-right text-xl font-bold">
        Total: ₹{totalAmount}
      </div>
    </div>
  );
};

export default Cart;
