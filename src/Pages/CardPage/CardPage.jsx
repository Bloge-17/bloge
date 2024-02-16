import style from "./CardPage.module.scss";
import { useState, useEffect } from "react";
import React from "react";
import { FALSE } from "sass";

let arrMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const CardPage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let cardUrlArr = String(window.location.href).split("-");
  let cardId = cardUrlArr[cardUrlArr.length - 1];

  useEffect(() => {
    async function renderCards() {
      try {
        const response = await fetch(`http://localhost:3000/cards/${cardId}`);

        if (response.ok) {
          const arr = await response.json();
          setData(arr);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    renderCards();
  }, []);

  console.log(data);

  let d = new Date(data.date);
  let month = arrMonth[d.getMonth()];
  let day = d.getDate();
  let year = d.getFullYear();

  return (
    <>
      {isLoading ? (
        <article>
          <div className={style.themeSkel}></div>
          <div className={style.headingSkel}></div>
          <div className={style.authorSkel}></div>
          <div className={style.imgSkel}></div>
          <div className={style.textSkel}></div>
        </article>
      ) : (
        <article className={style.post}>
          <div className={style.date__theme}>
            <p className={style.post__date}>
              {month} {day}, {year}
            </p>
            <p>&#183;</p>
            <p className={style.post__theme}>{data.theme}</p>
          </div>
          <h3 className={style.post__heading}>{data.heading}</h3>
          <div className={style.post__author}>
            <img className={style.post__ava} src={data.author?.ava} alt="ava" />
            <div>
              <p className={style.post__avtor}> {data.author?.name}</p>
              <p className={style.post__profession}>
                {data.author?.profession}
              </p>
            </div>
          </div>
          <img className={style.post__img} src={data.image} alt="pic" />
          <div className={style.post__content}>
            <span className={style.point}></span>
            <p className={style.post__text}>{data.text}</p>
          </div>
        </article>
      )}
    </>
  );
};
