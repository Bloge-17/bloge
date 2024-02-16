import { useState, useEffect } from "react";
import style from "./Header.module.scss";
import { SearchContext } from "../../providers/context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "../../components/NavLink/NavLink";
import { useContext } from "react";

export const Header = () => {
  const { searchResults, changeValue } = useContext(SearchContext);
  const navigate = useNavigate();
  const navArr = ["UI Design", "Front-end", "Back-end"];

  const [focus, setFocus] = useState(true);
  const [burger, setBurger] = useState(true);

  return (
    <>
      <header>
        <div className={style.container}>
          <label
            style={focus ? { zIndex: "101" } : { zIndex: 1 }}
            className={style.burger__label}
          >
            <input
              onChange={() => {
                burger ? setBurger(false) : setBurger(true);
              }}
              className={style.burger__checkbox}
              type="checkbox"
            />
            <img
              className={style.burger__menu}
              src={
                burger
                  ? "/images/svg/menu-burger.svg"
                  : "https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/128/close-icon.png"
              }
              alt=""
              width={24}
              height={24}
            />
          </label>
          <div
            style={
              window.innerWidth <= 518
                ? !focus
                  ? { display: "none" }
                  : null
                : null
            }
            className={style.logo__name}
          >
            <Link className={style.Link} to="/">
              <p className={style.logo}>IT</p>
              <p className={style.name}>IT blog</p>
            </Link>
          </div>
          <div
            style={!burger ? { transform: "translateX(1%)" } : null}
            className={style.header__nav}
          >
            <NavLink text={navArr[0]} />
            <NavLink text={navArr[1]} />
            <NavLink text={navArr[2]} />
            <select>
              <option value="">Lainnya</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className={style.search}>
            <img
              className={style.search__svg}
              src="./src/assets/images/svg/search.svg"
              alt=""
            />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("search");
                searchResults();
              }}
              action=""
            >
              <input
                onChange={changeValue}
                onFocus={() => {
                  setFocus(false);
                }}
                onBlur={() => {
                  setFocus(true);
                }}
                className={style.search__input}
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
