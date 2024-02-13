import { useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./layout/Header/Header";
import { Card } from "./layout/components/Card/Card";
import { Main } from "./layout/components/Main/Main";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function renderCards() {
      try {
        const response = await fetch("http://localhost:3000/cards");

        if (response.ok) {
          const arr = await response.json();
          setData(arr);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }
    renderCards();
  }, []);

  let cards = data.map((el) => <Card {...el} key={el.id} />);

  return (
    <>
      <Header />
      <Main cards={cards} />
    </>
  );
}
export default App;
