import React, { useContext } from "react";
import style from "./Main.module.scss";
import { CardContext } from "../../providers/context/CardContext";

export const Main = () => {
  const { cards } = useContext(CardContext);

  return <div className={style.container}>{cards}</div>;
};
