import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import CategoryCard from "../../Home/CategoryCard/CategoryCard";
import Home from "../../Home/Home/Home";
import ProductCategories from "../../Home/ProductCategories/ProductCategories";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import SingleCard from "../../Shared/SingleCard/SingleCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path:'category/:id',
        element: <SingleCard/>,
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/product-categories/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  },
]);
export default router;
