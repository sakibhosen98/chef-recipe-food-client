import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ViewRacipe from "../pages/Home/Recipe/ViewRacipe";

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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipe",
        element: <ViewRacipe></ViewRacipe>,
      },
    ],
  },
]);

// const Routes = () => {
//   return (
//     <div>

//     </div>
//   );
// };

export default router;
