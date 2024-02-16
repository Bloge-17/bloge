import React from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../providers/context/SearchContext";
import { useContext } from "react";

export const NavLink = ({ text }) => {
  const { clickNav } = useContext(SearchContext);

  let link = text.toLowerCase().split(' ').join('-')
  return (
    <Link
      onClick={() => {
        clickNav(text);
      }}
      to={link}
    >
      {text}
    </Link>
  );
};
