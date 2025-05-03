import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Books from "../components/Books/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/book.json')
      },
      {
        path: "/books",
        Component: Books,
       
      },
    ],
  },
]);
