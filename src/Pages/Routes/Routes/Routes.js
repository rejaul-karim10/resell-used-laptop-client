import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../../AllProducts/AllProducts/AllProducts";
import Blog from "../../Blog/Blog";
import CardDetails from "../../CardDetails/CardDetails";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Dashboard/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Dashboard/Dashboard/MyProducts/MyProducts";
import Home from "../../Home/Home/Home";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
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
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/category/:name",
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product-categories/${params.name}`),
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
    children: [
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
