import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import { objForMiddleSlider } from "../data";

const Result = () => {
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
                        Result of search (5)
                    </h2>
                    <SearchInput />
                    <div className="result__grid">
                        {objForMiddleSlider.map(
                            (item, index) =>
                                index < 5 && (
                                    <div
                                        key={index}
                                        className="middle-slider__item"
                                    >
                                        <img
                                            src={item.imgSrc}
                                            alt="commics"
                                            className="middle-slider__img"
                                        />
                                        <p className="middle-slider__subtitle">
                                            {item.subtitle}
                                        </p>
                                        <h3 className="middle-slider__caption">
                                            {item.caption}
                                        </h3>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Result;
