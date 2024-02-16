import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage } from "../../Pages/SearchPage/SearchPage";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { Layout } from "../../layout/Layout";
import { UiDesign } from "../../Pages/UIDesign/UiDesign";
import { FrontEnd } from "../../Pages/Front-End/FrontEnd";
import { BackEnd } from "../../Pages/Back-End/BackEnd";
import { CardPage } from "../../Pages/CardPage/CardPage";
import style from "./router.module.scss";
import { ErorPage } from "../../Pages/ErorPage/ErorPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/ui-design",
        element: <UiDesign />,
      },
      {
        path: "/front-end",
        element: <FrontEnd />,
      },
      {
        path: "/back-end",
        element: <BackEnd />,
      },
      {
        path: "/*",
        element: <ErorPage />,
      },
      {
        path: "/:theme/:postName",
        element: (
          <div className={style.container}>
            <CardPage />
          </div>
        ),
      },
    ],
  },
]);
