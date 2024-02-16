import "./App.scss";
import { router } from "./providers/router/routes.jsx";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />{" "}
    </>
  );
}
export default App;
