import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Fotter/Footer";
import style from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
};
