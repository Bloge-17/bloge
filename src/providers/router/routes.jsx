import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { SearchPage } from "../../Pages/SearchPage/SearchPage";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { Layout } from "../../layout/Layout";
import { UiDesign } from "../../Pages/UIDesign/UiDesign";
import { FrontEnd } from "../../Pages/Front-End/FrontEnd";
import { BackEnd } from "../../Pages/Back-End/BackEnd";



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
        path: "/Ui Design",
        element: <UiDesign />,
      },
      {
        path: "/Front-End",
        element: <FrontEnd />,
      },
      {
        path: "Back-end",
        element:<BackEnd/>
      },
    ],
  },
]);