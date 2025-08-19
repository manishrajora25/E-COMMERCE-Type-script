// import { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import UserContext from "../Context/UserContext";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const userContext = useContext(UserContext);

//   if (!userContext) {
//     throw new Error("UserContext must be used within UserProvider");
//   }

//   const { product, fetchProductById } = userContext;

//   useEffect(() => {
//     if (id) {
//       fetchProductById(id);
//     }
//   }, [id]);

//   if (!product) {
//     return <p className="text-center mt-10">Loading product...</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row gap-8 mt-[3%]">
//       {/* Left Side: Product Image */}
//       <div className="flex-1 flex items-center justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>

    
//       <div className="flex-1 flex flex-col justify-center">
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1> 
//         <p className="text-gray-700 mb-6">{product.description}</p>
//         <p className="text-xl font-semibold text-green-600 mb-2">
//           ₹{product.discountedPrice || product.price}
//         </p>

 
 

//         <div className="flex gap-4 mt-[20px]">
//           <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
//             Add to Cart
//           </button>
//           <button className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
//             Add to Wishlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;






// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import UserContext from "../Context/UserContext";
// import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

// const SingleProduct = () => {
//   const { id } = useParams<{ id: string }>();
//   const userContext = useContext(UserContext);

//   if (!userContext) {
//     throw new Error("UserContext must be used within UserProvider");
//   }

//   const { product, fetchProductById ,fetchCart} = userContext;

//   const [quantity, setQuantity] = useState<number>(1);

//   useEffect(() => {
//     if (id) {
//       fetchProductById(id);
//     }
//   }, [id]);

//   const incrementQty = () => setQuantity((prev) => prev + 1);
//   const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

 

//   if (!product) {
//     return <p className="text-center mt-10">Loading product...</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row gap-8 mt-12">
//       {/* Left Side: Product Image */}
//       <div className="flex-1 flex items-center justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Right Side: Product Info */}
//       <div className="flex-1 flex flex-col justify-center">
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//         <p className="text-gray-700 mb-6">{product.description}</p>
//         <p className="text-xl font-semibold text-green-600 mb-4">
//           ₹{product.price * quantity}
//         </p>

//         {/* Quantity Controls */}
//         <div className="flex items-center gap-4 mb-6">
//           <button
//             onClick={decrementQty}
//             className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
//           >
//             <CiSquareMinus size={28} />
//           </button>
//           <span className="text-lg font-semibold">{quantity}</span>
//           <button
//             onClick={incrementQty}
//             className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
//           >
//             <CiSquarePlus size={28} />
//           </button>
//         </div>

//         {/* Cart & Wishlist Buttons */}
//         <div className="flex gap-4">
//   <button
//     // onClick={() => userContext.addToCart(product, quantity)}
//     className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//   >
//     Add to Cart
//   </button>
//   <button
//     // onClick={() => userContext.addToWishlist(product)}
//     className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
//   >
//     Add to Wishlist
//   </button>
// </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;










// import { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import UserContext from "../Context/UserContext";

// const SingleProduct = () => {
//   const { id } = useParams<{ id: string }>();
//   const userContext = useContext(UserContext);

//   if (!userContext) {
//     throw new Error("UserContext must be used within UserProvider");
//   }

//   const { product, fetchProductById, addToCart, addToWishlist } = userContext;

//   useEffect(() => {
//     if (id) {
//       fetchProductById(id);
//     }
//   }, [id]);

//   if (!product) {
//     return <p className="text-center mt-10">Loading product...</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row gap-8 mt-12">
//       {/* Left Side: Product Image */}
//       <div className="flex-1 flex items-center justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Right Side: Product Info */}
//       <div className="flex-1 flex flex-col justify-center">
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//         <p className="text-gray-700 mb-6">{product.description}</p>
//         <p className="text-xl font-semibold text-green-600 mb-4">
//           ₹{product.discountedPrice || product.price}
//         </p>

//         {/* Cart & Wishlist Buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => addToCart(product)}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Add to Cart
//           </button>
//           <button
//             onClick={() => addToWishlist(product)}
//             className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
//           >
//             Add to Wishlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;












import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "../App.css"

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userContext = useContext(UserContext);
  const navigate = useNavigate(); // <-- navigate hook

  if (!userContext) {
    throw new Error("UserContext must be used within UserProvider");
  }

  const { product, fetchProductById, addToCart, addToWishlist } = userContext;

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  // Add to cart and navigate
  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // <-- redirect to cart page
  };


  const handleAddToWishlist = () => {
    addToWishlist(product);
    navigate("/wishlist"); // <-- redirect to cart page
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row gap-8 mt-12">
      {/* Left Side: Product Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Side: Product Info */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-xl font-semibold text-green-600 mb-4">
          ₹{product.discountedPrice || product.price}
        </p>

        {/* Cart & Wishlist Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart} // <-- updated
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToWishlist}
            className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
