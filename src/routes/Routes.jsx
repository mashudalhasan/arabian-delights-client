import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefsCard from "../pages/ChefsCard/ChefsCard";
import RecipesInfo from "../pages/RecipesInfo/RecipesInfo";

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
        element: <Blog></Blog>,
      },
      {
        path: 'recipesInfo/:id',
        element: <RecipesInfo></RecipesInfo>,
        loader: ({params}) => fetch(`http://localhost:5000/recipesInfo/${params.id}`)
      }
    ],
  },
]);

export default router;
