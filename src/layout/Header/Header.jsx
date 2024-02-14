import { useContext } from "react";
import style from "./Header.module.scss";
import { SearchContext } from "../../providers/context/SearchContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { searchResults, changeValue } = useContext(SearchContext);

  return (
    <>
      <header>
        <div className={style.container}>
          <label>
            <img
              className={style.burger__menu}
              src="./src/assets/images/svg/menu-burger.svg"
              alt=""
            />
          </label>
          <div className={style.logo__name}>
            <p className={style.logo}>IT</p>
            <p className={style.name}>IT blog</p>
          </div>
          <div className={style.header__nav}>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=rA7bL7GAecGxV-TZ">
              UI Design
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
            <img
              className={style.search__svg}
              src="./src/assets/images/svg/search.svg"
              alt=""
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                searchResults();
              }}
              action=""
            >
              <input
                onChange={changeValue}
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
