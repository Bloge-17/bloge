import "./App.scss";
import { Header } from "./layout/Header/Header";
spawn("json-server", ["../db.json"]);
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
