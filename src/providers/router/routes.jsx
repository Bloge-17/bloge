import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage } from "../../Pages/SearchPage/SearchPage";

import { HomePage } from "../../Pages/HomePage/HomePage";
import { CardPage } from "../../Pages/CardPage/CardPage";
import { Layout } from "../../layout/Layout";
import style from "./router.module.scss";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/:theme/:postName",
    element: (
      <Layout>
        <div className={style.container}>
          <CardPage  />
        </div>
      </Layout>
    ),
  },
]);
