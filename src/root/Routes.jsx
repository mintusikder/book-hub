import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Books from "../components/Books/Books";
import ReadMoreDetails from "../pages/ReadMore/ReadMoreDetails";
import DetailsLayout from "../layout/DetailsLayout";
import About from "../pages/About";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/book.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/books",
        Component: Books,
      },
    ],
  },
  {
    path: "/",
    Component: DetailsLayout,
    children: [
      {
        path: "/read-more/:id",
        element: (
          <PrivateRoutes>
            <ReadMoreDetails></ReadMoreDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/book.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
