import style from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header>
        <div className={style.container}>
          <div className={style.logo__name}>
            <p className={style.logo}>IT</p>
            <p className={style.name}>IT blog</p>
          </div>
          <div className={style.header__nav}>
            <a href="#">UI Design</a>
            <a href="#">Front-end</a>
            <a href="#">Front-end</a>
            <select>
              <option value="">Lainnya</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="search">
            <img src="./src/assets/images/svg/search.svg" alt="" />
          </div>
        </div>
      </header>
    </>
  );
};
