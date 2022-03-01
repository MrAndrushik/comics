import React from "react";
import MiddleSlider from "../components/MiddleSlider";
import SmallSlider from "../components/SmallSlider";
import TopSlider from "../components/TopSlider";

const Showcase = () => {
    const imagesForTopSlider = [
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
        { imgSrc: "img/banner.png" },
    ];

    const objForMiddleSlider = [
        { imgSrc: "img/comics1.png", caption: "NuwComics", subtitle: "Comedy" },
        {
            imgSrc: "img/comics2.png",
            caption: "Down to Earth",
            subtitle: "Mystery",
        },
        {
            imgSrc: "img/comics3.png",
            caption: "Silent Fate",
            subtitle: "Fantasy",
        },
        { imgSrc: "img/comics4.png", caption: "True", subtitle: "Drama" },
        { imgSrc: "img/comics5.png", caption: "NuwComics", subtitle: "Comedy" },
        { imgSrc: "img/comics6.png", caption: "NuwComics", subtitle: "Comedy" },
        { imgSrc: "img/comics1.png", caption: "NuwComics", subtitle: "Comedy" },
        {
            imgSrc: "img/comics2.png",
            caption: "Down to Earth",
            subtitle: "Mystery",
        },
        {
            imgSrc: "img/comics3.png",
            caption: "Silent Fate",
            subtitle: "Fantasy",
        },
        { imgSrc: "img/comics4.png", caption: "True", subtitle: "Drama" },
        { imgSrc: "img/comics5.png", caption: "NuwComics", subtitle: "Comedy" },
        { imgSrc: "img/comics6.png", caption: "NuwComics", subtitle: "Comedy" },
    ];

    const objForSmallSlider = [
        {
            imgSrc: "img/small1.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
        {
            imgSrc: "img/small2.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
        {
            imgSrc: "img/small3.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
        {
            imgSrc: "img/small4.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
        {
            imgSrc: "img/small1.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
        {
            imgSrc: "img/small2.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
        {
            imgSrc: "img/small3.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
        {
            imgSrc: "img/small4.png",
            caption: "MIA. White Blood",
            subtitle: "Mystery, Drama",
            text: "This is a story about a lonely girl who had a unique ability to read",
        },
    ];

    return (
        <div className="showcase">
            <TopSlider images={imagesForTopSlider} />
            <section className="recomendation">
                <MiddleSlider
                    title="Recommendations for you"
                    data={objForMiddleSlider}
                />
                <SmallSlider title="Daily" data={objForSmallSlider} />
            </section>
            <section className="answer">
                <div className="answer__container container">
                    <h2 className="answer__title">
                        Answer these questions to find your new favorite series!
                    </h2>
                    <button className="answer__btn">Start</button>
                </div>
            </section>
            <section className="new">
                <div className="new__container container">
                    <h2 className="new__title">Exciting New Stories</h2>
                    <p className="new__descr">
                        Series from our Self-Publishing Creators
                    </p>
                </div>
            </section>
            <section className="choise">
                <MiddleSlider title="Staff Picks" data={objForMiddleSlider} />
                <MiddleSlider title="Specials" data={objForMiddleSlider} />
            </section>
            <div className="welcome">
                <div className="welcome__container container">
                    <img
                        src="img/girl.svg"
                        alt="girl"
                        className="welcome__girl"
                    />
                    <div className="welсome__content">
                        <h2 className="welcome__title">
                            Welcome to the world of comics!
                        </h2>
                        <button className="welcome__btn">Log in</button>
                    </div>
                </div>
            </div>
            <SmallSlider title="Today’s Hot Series" data={objForSmallSlider} />
        </div>
    );
};

export default Showcase;
