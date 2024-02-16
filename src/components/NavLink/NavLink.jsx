import React from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../providers/context/SearchContext";
import { useContext } from "react";

export const NavLink = ({ text }) => {
  const { clickNav } = useContext(SearchContext);

  return (
    <Link
      onClick={() => {
        clickNav(text);
      }}
      to={text}
    >
      {text}
    </Link>
  );
};
