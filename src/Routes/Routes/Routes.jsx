import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";

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
        path: '/products',
        element: <Products />,
        loader: async () => await fetch('http://localhost:5000/productCount')
      }
    ],
  },
]);

export default router;