import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import ChefsCard from "../pages/ChefsCard/ChefsCard";
import RecipesInfo from "../pages/RecipesInfo/RecipesInfo";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import RecipesLayout from "../layouts/RecipesLayout";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Shared/Terms/Terms";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Privacy from "../Shared/Privacy/Privacy";
import History from "../Shared/History/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "terms",
        element: <Terms></Terms>,
      },
      {
        path: "privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "history",
        element: <History></History>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "chefsInfo",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: <ChefsCard></ChefsCard>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-mashudalhasan.vercel.app/chefsInfo/${params.id}`
          ),
      },
    ],
  },
  {
    path: "recipesInfo",
    element: <RecipesLayout></RecipesLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <RecipesInfo></RecipesInfo>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-mashudalhasan.vercel.app/recipesInfo/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
