import React, { useContext } from "react";
import style from "./Main.module.scss";
import { CardContext } from "../../providers/context/CardContext";
import { Layout } from "../../layout/Layout";

export const Main = () => {
  const { cards } = useContext(CardContext);
  return (
    <Layout>
      <div className={style.container}>
        {cards}
      </div>
    </Layout>
  );
};
