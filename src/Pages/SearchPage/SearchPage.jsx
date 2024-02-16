import React, { useContext } from "react";
import "./SearchPagee.scss";
import { SearchContext } from "../../providers/context/SearchContext";
import { Card } from "../../components/Card/Card";

export const SearchPage = () => {
  const { inputValue, data, searchParams } = useContext(SearchContext);

  let cards = data
    .filter((el) =>
      el.heading.toLowerCase().includes(searchParams.get("s").toLowerCase()),
    )
    .map((el) => <Card {...el} key={el.id} />);

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
