import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ViewRacipe from "../pages/Home/Recipe/ViewRacipe";
import NotFound from "../pages/Home/Recipe/NotFound/NotFound";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "/:id",
        element:<PrivateRoute><ViewRacipe></ViewRacipe></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ],
    errorElement: <NotFound></NotFound>
  },
]);

export default router;
