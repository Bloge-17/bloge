import React from "react";
import { CardContext } from "./CardContext";
import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";

export const CardProvider = ({ children }) => {
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

  let lastDate = data.map((el) => +new Date(el.date));
  function getMaxOfArray() {
    return Math.max.apply(null, lastDate);
  }

  let lastPost = getMaxOfArray(); // находим дату последнего поста

  let cards = data.map((el, index) => (
    <Card {...el} lastPost={lastPost} key={index} />
  )); // мапаем карточки

  return (
    <CardContext.Provider value={{ cards }}>{children}</CardContext.Provider>
  );
};
