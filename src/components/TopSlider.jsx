import React from "react";
import Slider from "react-slick";

const TopSlider = ({ images, style }) => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // ОТВЕЧАЕТ ЗА ПОДЛОЖКУ ДЛЯ DOTS
        appendDots: (dots) => (
            <div
                style={{
                    position: "relative",
                    top: "-80px",
                    borderRadius: "10px",
                    padding: "10px",
                    zIndex: 2,
                }}
            >
                <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
        ),
        // ОТВЕЧАЕТ ЗА ВИД DOTS, АКТИВНЫЙ DOT УСТАНАВЛИВАЕТСЯ В СТИЛЯХ style.scss
        customPaging: (i) => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    background: "#ACBBC5",
                    borderRadius: "50%",
                }}
            ></div>
        ),
    };

    return (
        <div className="top-slider" style={{ ...style }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <img key={index} src={image.imgSrc} alt="banner" />
                ))}
            </Slider>
        </div>
    );
};

export default TopSlider;
