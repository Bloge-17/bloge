import { Card } from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { SearchContext } from "../../providers/context/SearchContext";
import { useContext } from "react";

export const FrontEnd = () => {
  const [data, setData] = useState([]);
  const { inputValue } = useContext(SearchContext);

  useEffect(() => {
    async function renderCards() {
      try {
        const response = await fetch(
          "http://localhost:3000/cards?theme=Front-end",
        );
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
      <h2 className="search-heading">Search: {inputValue}</h2>
      <main>
        {cards.length === 0 ? (
          <div className="noResult">
            <h3 className="noResult__head">No result 😥</h3>
            <p className="noResult__text">
              We couldn’t find any posts with the keyword '{inputValue}'. Please
              try another keyword.
            </p>
          </div>
        ) : (
          cards
        )}
      </main>
    </>
  );
};
