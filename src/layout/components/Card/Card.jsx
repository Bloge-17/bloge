import "./Card.scss";

import React from "react";

export const Card = ({ data }) => {
  return (
    <article className="post">
      <img className="post__img" src={data.image} alt="pic" />
      <div className="post__content">
        <p className="post__theme">{data.theme}</p>
        <span className="point"></span>
        <p className="post__date">{data.date}</p>
        <h3 className="post__heading">{data.heading}</h3>
        <p className="post__text">{data.text}</p>
        <div className="post__author">
          <img className="post__ava" src={data.author.ava} alt="ava" />
          <div>
            <p className="post__avtor"> {data.author.name}</p>
            <p className="post__profession">{data.author.profession}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
