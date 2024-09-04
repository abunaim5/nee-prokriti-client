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
        path: '/products/:collection',
        element: <Products />,
        loader: async ({params}) => await fetch(`http://localhost:5000/productCount?filter=${params.collection}`)
      }
    ],
  },
]);

export default router;