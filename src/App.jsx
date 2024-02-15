import "./App.scss";
import { Header } from "./layout/Header/Header";
import { Main } from "./components/Main/Main";
import { CardProvider } from "./providers/context/CardProvider";
import { router } from "./providers/router/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { SearchProvider } from "./providers/context/SearchProvider.jsx";
import { Footer } from "./layout/Fotter/Footer.jsx";
import { Layout } from "./layout/Layout.jsx";

function App() {
  return (
    <>
      <SearchProvider>
        <CardProvider>
          <RouterProvider router={router} />
        </CardProvider>
      </SearchProvider>
    </>
  );
}
export default App;
