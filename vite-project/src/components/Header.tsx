import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/UserContext"; 


const Header = () => {

  const { cart, wishlist } = useContext(UserContext);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🛒 MyShop
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>

          <Link to="/cart" className="hover:text-gray-200 relative">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>



           <Link to="/wishlist" className="hover:text-gray-200 relative">
            Wishlist
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
         
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-medium hover:bg-yellow-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
