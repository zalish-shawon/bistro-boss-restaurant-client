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
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
        }
      ]
    }
  ]);