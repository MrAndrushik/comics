import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MiddleSlider from "../components/MiddleSlider";
import SmallSlider from "../components/SmallSlider";
import TopSlider from "../components/TopSlider";
import {
    imagesForTopSlider,
    objForMiddleSlider,
    objForSmallSlider,
} from "../data";

const Showcase = () => {
    return (
        <div className="wrraper">
            <Header dark={false} />
            <div className="showcase">
                <section className="hero">
                    <TopSlider images={imagesForTopSlider} />
                </section>
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
                            Answer these questions to find your new favorite
                            series!
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
                    <MiddleSlider
                        title="Staff Picks"
                        data={objForMiddleSlider}
                    />
                    <MiddleSlider title="Specials" data={objForMiddleSlider} />
                </section>
                <section className="welcome">
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
                </section>
                <SmallSlider
                    title="Today’s Hot Series"
                    data={objForSmallSlider}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Showcase;
