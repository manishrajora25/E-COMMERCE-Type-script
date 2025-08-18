// import { createContext, useState, useEffect } from "react";
// import Instance from "../Axios.tsx";
// import type { ReactNode } from "react";
// // Product type define कर लो (backend response के हिसाब से आप customize कर सकते हो)
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description?: string;
//   image?: string;
// }

// // Context type
// interface UserContextType {
//   products: Product[];
//   fetchProduct: () => Promise<void>;
// }

// // Default context (null नहीं देंगे तो error आएगा)
//  const UserContext = createContext<UserContextType | undefined>(undefined);

// interface UserProviderProps {
//   children: ReactNode;
// }

// export const UserProvider = ({ children }: UserProviderProps) => {
//   const [products, setProducts] = useState<Product[]>([]);

//   const fetchProduct = async () => {
//     try {
//       const response = await Instance.get<Product[]>("https://api-e-commerace-in-node-js.onrender.com/product/all");
//       setProducts(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   return (
//     <UserContext.Provider value={{ products, fetchProduct }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext





// import { createContext, useState, useEffect } from "react";
// import Instance from "../Axios.tsx";
// import type { ReactNode } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description?: string;
//   image?: string;
// }

// // Context type
// interface UserContextType {
//   products: Product[];
//   product: Product | null;
//   fetchProduct: () => Promise<void>;
//   fetchProductById: (id: string) => Promise<void>;
//   cart: Product[];
//   fetchCart: () => Promise<void>;
// }

// // Default context
// const UserContext = createContext<UserContextType | undefined>(undefined);

// interface UserProviderProps {
//   children: ReactNode;
// }

// export const UserProvider = ({ children }: UserProviderProps) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [product, setProduct] = useState<Product | null>(null);
//   const [cart, setCart] = useState<Product[]>([]);
  

//   // 🔹 All Products Fetch
//   const fetchProduct = async () => {
//     try {
//       const response = await Instance.get<Product[]>(
//         "https://api-e-commerace-in-node-js.onrender.com/product/all"
//       );
//       setProducts(response.data);
//       console.log("All Products:", response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // 🔹 Single Product Fetch by ID
//   const fetchProductById = async (id: string) => {
//     try {
//       const response = await Instance.get<Product>(
//         `https://api-e-commerace-in-node-js.onrender.com/product/${id}`
//       );
//       setProduct(response.data);
//       console.log("Single Product:", response.data);
//     } catch (error) {
//       console.error("Error fetching single product:", error);
//     }
//   };

//   const fetchCart = async () => {
//     try {
//       const response = await Instance.get<Product[]>(
//         "https://api-e-commerace-in-node-js.onrender.com/product/cart/data"
//       );
//       setCart(response.data);
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   return (
//     <UserContext.Provider value={{ products, product, cart, fetchProduct, fetchProductById, fetchCart }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;









import { createContext, useState, useEffect  } from "react";
import type {ReactNode} from "react";
import axios from "axios";

export interface Product {
  _id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  description?: string;
  image?: string;
}

interface UserContextType {
  products: Product[];
  product: Product | null;
  cart: Product[];
  wishlist: Product[];
  fetchProductById: (id: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromCart: (id: string) => void;
  removeFromWishlist: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all products on mount
    axios
      .get<Product[]>("https://api-e-commerace-in-node-js.onrender.com/product/all")
      .then((res) => {
        setProducts(res.data);
        console.log("All Products:", res.data); // ✅ console yahan hi
      })
      .catch((err) => console.error(err));
  }, []);
  
  

  
  const fetchProductById = (id: string) => {
    const found = products.find((p) => p._id === id);
    if (found) setProduct(found);
    
  };


  const addToCart = (product: Product, quantity: number = 1) => {
    const exists = cart.find((item) => item._id === product._id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, price: item.price * quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product }]);
    }
  };
  console.log("add",cart);


  const addToWishlist = (product: Product) => {
    if (!wishlist.find((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };
  console.log("wishlist",cart);

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  return (
    <UserContext.Provider
      value={{
        products,
        product,
        cart,
        wishlist,
        fetchProductById,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
