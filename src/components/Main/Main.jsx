import React, { useContext } from "react";
import "./Main.scss";
import { CardContext } from "../../providers/context/CardContext";
import {Link} from "react-router-dom"

export const Main = () => {
  
  const { cards } = useContext(CardContext);
  return (
    <>
      <main>{cards}</main>
    </>)
};
