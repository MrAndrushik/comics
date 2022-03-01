import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <img className="header__logo" src="img/logo.svg" alt="Fables" />
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/discover" className="nav__link">
                                Discover
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link nav__link--active">
                                Showcase
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/originals" className="nav__link">
                                Originals
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__btns">
                    <div className="header__block header__block--language">
                        <button className="header__language">
                            {" "}
                            <img
                                src="img/language.svg"
                                alt="current language"
                            />
                        </button>
                    </div>
                    <div className="header__block header__block--search ">
                        <button className="header__search">
                            {" "}
                            <img src="img/search.svg" alt="search" />
                        </button>
                    </div>
                    <div className="header__block header__block--account">
                        <button className="header__profile">
                            {" "}
                            <img src="img/profile.svg" alt="profile" />
                            <div className="header__account-decoration"></div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
