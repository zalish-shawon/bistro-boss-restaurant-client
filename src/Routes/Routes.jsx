import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import Menu from "../components/pages/Menu/Menu";
import Order from "../components/pages/Order/Order";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../components/pages/DashBoard/Cart/Cart";
import AllUsers from "../Layout/allUsers";
import PrivateRoutes from "../components/Private/PrivateRoutes";
import AddItems from "../components/pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../components/pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../components/pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../components/pages/DashBoard/Payment/Payment";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children: [
        // normal users routes
        {
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        // admin routes
        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "addItems",
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: "manageItems",
          element: <ManageItems></ManageItems>
        },
        {
          path: "updateItem/:id",
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menus/${params.id}`),
        }
      ]
    }
  ]);