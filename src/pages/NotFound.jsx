import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

const NotFound = () => {
    return (
        <div className="wrapper">
            <Header dark={true} />
            <section className="result" style={{ marginTop: 100 }}>
                <div className="result__container container">
                    <div className="crumbs__container">
                        <a
                            href="/"
                            className="crumbs__link crumbs__link--active"
                        >
                            Search
                        </a>
                        <a href="/" className="crumbs__link">
                            Nuw
                        </a>
                    </div>
                    <h2 className="result__title result__title_center">
                        Result of search (0)
                    </h2>
                    <SearchInput />
                    <div className="result__emty">
                        <img
                            src="img/search-dark.svg"
                            alt=""
                            className="result__emty-img"
                        />
                        <p className="result__emty-text">
                            No results found for your request
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NotFound;
