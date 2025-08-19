// // import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import UserContext from "./Context/UserContext.tsx";
// import First from "./First.tsx";
// import Home from "./Pages/Home.tsx"
// import SingleProduct from "./Pages/SingleProduct.tsx"
// import Cart from "./Pages/Cart.tsx";


// import "./App.css";

// const router = createBrowserRouter([
//   // {
//   //   path: "/login",
//   //   element: <Login />,
//   // },
//   // {
//   //   path: "/register",
//   //   element: <Register />,
//   // },
//   {
//     path: "/",
//     element: <First />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "singleproduct/:id",
//         element: <SingleProduct />,
//       },

//       {
//         path: "cart/:id",
//         element: <Cart />,
//       },

      
     
     
//     ],
//   },
// ]);

// function App() {
//   return (
//   <UserContext>
//       <RouterProvider router={router} />
//       </UserContext>

//   );
// }

// export default App;






import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./Context/UserContext.tsx";
import First from "./First.tsx";
import Home from "./Pages/Home.tsx";
import SingleProduct from "./Pages/SingleProduct.tsx";
import Cart from "./Pages/Cart.tsx";
import Wishlist from "./Pages/Wishlist.tsx";
import Contact from "./Pages/Contact.tsx";
import About from "./Pages/About.tsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { index: true, element: <Home /> },
      { path: "/singleproduct/:id", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/contact", element: <Contact /> }, 
      { path: "/about", element: <About /> }, // fixed
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
