import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

const MiddleSlider = ({ title, data }) => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        customPaging: (i) => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    background: "#E3DDFC",
                    borderRadius: "50%",
                }}
            ></div>
        ),
    };
    return (
        <div className="middle-slider container">
            <h2 className="middle-slider__title stn-title">{title}</h2>
            <Slider {...settings} style={{ marginBottom: "100px" }}>
                {data.map((item, index) => (
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
            </Slider>
        </div>
    );
};

export default MiddleSlider;
