import style from "./Card.module.scss";

import React from "react";

export const Card = ({
  image,
  theme,
  date,
  heading,
  text,
  author,
  lastPost,
}) => {
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

  let d = new Date(date);
  let month = arrMonth[d.getMonth()];
  let day = d.getDate();
  let year = d.getFullYear();

  let stamp = +d;

  return (
    <article className={stamp === lastPost ? style.lastPost : style.post}>
      <img
        className={stamp === lastPost ? style.lastPost__img : style.post__img}
        src={image}
        alt="pic"
      />
      <div className={style.post__content}>
        <p className={style.post__theme}>{theme}</p>
        <span className={style.point}></span>
        <p className={style.post__date}>
          {month} {day}, {year}
        </p>
        <h3 className={style.post__heading}>{heading}</h3>
        <p className={style.post__text}>{text}</p>
        <div className={style.post__author}>
          <img className={style.post__ava} src={author.ava} alt="ava" />
          <div>
            <p className={style.post__avtor}> {author.name}</p>
            <p className={style.post__profession}>{author.profession}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
