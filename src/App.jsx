import "./App.scss";
import { router } from "./providers/router/routes.jsx";
import { RouterProvider } from "react-router-dom";



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
