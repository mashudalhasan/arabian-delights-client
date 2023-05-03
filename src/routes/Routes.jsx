import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefsCard from "../pages/ChefsCard/ChefsCard";
import RecipesInfo from "../pages/RecipesInfo/RecipesInfo";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import RecipesLayout from "../layouts/RecipesLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/chefsInfo/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "chefsInfo",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <ChefsCard></ChefsCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefsInfo/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "recipesInfo",
    element: <RecipesLayout></RecipesLayout>,
    children: [
      {
        path: ":id",
        element: <RecipesInfo></RecipesInfo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipesInfo/${params.id}`),
      },
    ],
  },
]);

export default router;
