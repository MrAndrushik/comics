import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

const SmallSlider = ({ data, title }) => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
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
        <div className="small-slider container">
            <h2 className="small-slider__title stn-title">{title}</h2>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="small-slider__item">
                        <img src={item.imgSrc} alt="comics" />
                        <div className="small-slider__box">
                            <p className="small-slider__subtitle">
                                {item.subtitle}
                            </p>
                            <h3 className="small-slider__caption">
                                {item.caption}
                            </h3>
                            <p className="small-slider__text">{item.text}</p>
                            ...
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SmallSlider;
