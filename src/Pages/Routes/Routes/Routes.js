import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../../AllProducts/AllProducts/AllProducts";
import Blog from "../../Blog/Blog";
import CardDetails from "../../CardDetails/CardDetails";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Dashboard/Dashboard/MyOrders/MyOrders";
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
        element: <CardDetails />,
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
        path: "/dashboard",
        element: <MyOrders />,
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
