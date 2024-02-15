import { useContext } from "react";
import style from "./Header.module.scss";
import { SearchContext } from "../../providers/context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "../../components/NavLink/NavLink";


export const Header = () => {
  const {
    searchResults,
    changeValue,
  } = useContext(SearchContext);
  const navigate = useNavigate();
  const navArr = ["UI Design", "Front-end", "Back-end"];



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
          <Link to="/">
            <div className={style.logo__name}>
              <p className={style.logo}>IT</p>
              <p className={style.name}>IT blog</p>
            </div>
          </Link>
          <div className={style.header__nav}>
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
                
                // value={searchParams.get('page')}
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
