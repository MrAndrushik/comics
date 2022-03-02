import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import TopSlider from "../components/TopSlider";
import { imagesForTopSlider, objForMiddleSlider } from "../data";

const Drama = () => {
    return (
        <div className="wrapper">
            <Header />
            <TopSlider
                images={imagesForTopSlider}
                style={{ marginBottom: 0 }}
            />
            <section className="result">
                <div className="result__container container">
                    <div className="crumbs__container">
                        <a
                            href="/"
                            className="crumbs__link crumbs__link--active"
                        >
                            Search
                        </a>
                        <a href="/" className="crumbs__link">
                            Drama
                        </a>
                    </div>
                    <h2 className="result__title">Drama (435)</h2>
                    <div className="result__box">
                        <SearchInput style={{ display: "block", margin: 0 }} />
                        <div className="result__sort">
                            <p>Sort by:</p>
                            <button className="sort-btn">
                                Rating - Popular on the top
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0.528636 0.528585C0.788985 0.268236 1.2111 0.268236 1.47145 0.528585L5.00004 4.05718L8.52864 0.528585C8.78899 0.268235 9.2111 0.268235 9.47144 0.528585C9.7318 0.788934 9.7318 1.21104 9.47144 1.47139L5.47145 5.47139C5.2111 5.73174 4.78899 5.73174 4.52864 5.47139L0.528636 1.47139C0.268286 1.21104 0.268286 0.788935 0.528636 0.528585Z"
                                        fill="#000"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="result__grid">
                        {objForMiddleSlider.map((item, index) => (
                            <div key={index} className="middle-slider__item">
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
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Drama;
