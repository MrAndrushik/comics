import React from "react";
import Slider from "react-slick";

function SearchBackArrow({ onClick }) {
    return (
        <div className="seacrh__arrow seacrh__arrow_back" onClick={onClick}>
            <img src="img/search-back-arrow.svg" alt="back" />
        </div>
    );
}

function SearchNextArrow({ onClick }) {
    return (
        <div className="seacrh__arrow seacrh__arrow_next" onClick={onClick}>
            <img src="img/search-next-arrow.svg" alt="back" />
        </div>
    );
}

const SearchSlider = ({ categories }) => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 12,
        slidesToScroll: 6,
        prevArrow: <SearchBackArrow />,
        nextArrow: <SearchNextArrow />,
    };
    return (
        <Slider {...settings}>
            {categories.map((item, index) => (
                <div key={index} className="search__item">
                    <div className="search__box">
                        <img src={item.imgSrc} alt="" />
                    </div>
                    <p className="search__text">{item.caption}</p>
                </div>
            ))}
        </Slider>
    );
};

export default SearchSlider;
