import "./App.scss";
import { Header } from "./layout/Header/Header";
import { Main } from "./components/Main/Main";
import { CardProvider } from "./providers/context/CardProvider";

function App() {
  return (
    <>
      <CardProvider>
        <Header />
        <Main />
      </CardProvider>
    </>
  );
}
export default App;
