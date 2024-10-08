import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";
import productCountLoader from "../../loaders/productCountLoader";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products/:collection',
        element: <Products />,
        loader: productCountLoader
        // loader: async ({params, searchText}) => await fetch(`http://localhost:5000/productCount?search=${searchText}&filter=${params.collection}`)
      },
      {
        path: '/details/:id',
        element: <ProductDetails />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
  },
]);

export default router;