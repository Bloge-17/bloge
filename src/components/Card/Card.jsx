import "./Card.scss";

import React from "react";

export const Card = ({ image, theme, date, heading, text, author, lastPost}) => {
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
  
  
  let d = new Date(date) 
  let month = arrMonth[d.getMonth()]
  let day = d.getDate()
  let year =d.getFullYear()
  

  let stamp = +d
  

  return (
   
    <article className={stamp===lastPost ? "last__post" : "post"}  >
      <img className={stamp===lastPost ? "last__img" : "post__img"} src={image} alt="pic" />
      <div className="post__content">
        <p className="post__theme">{theme}</p>
        <span className="point"></span>
        <p className="post__date">{month} {day}, {year}</p>
        <h3 className="post__heading">{heading}</h3>
        <p className="post__text">{text}</p>
        <div className="post__author">
          <img className="post__ava" src={author.ava} alt="ava" />
          <div>
            <p className="post__avtor"> {author.name}</p>
            <p className="post__profession">{author.profession}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
