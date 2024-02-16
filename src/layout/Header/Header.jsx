import { useState, useEffect } from "react";
import style from "./Header.module.scss";
import { SearchContext } from "../../providers/context/SearchContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const [focus, setFocus] = useState(true);
  const [burger, setBurger] = useState(true);
  const [searchResults, changeValue] = useState(SearchContext);

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
            <a href="https://youtu.be/dQw4w9WgXcQ?si=rA7bL7GAecGxV-TZ">
              not RickRoll
            </a>
            <a href="#">Front-end</a>
            <a href="#">Front-end</a>
            <select>
              <option value="">Lainnya</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className={style.search}>
            <form onChange={(e) => e.preventDefault()} action="">
              <input
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
