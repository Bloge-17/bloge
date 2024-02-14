import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage } from "../../Pages/SearchPage/SearchPage";

import { HomePage } from "../../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);
