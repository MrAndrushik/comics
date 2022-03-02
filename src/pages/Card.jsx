import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { episodes } from "../data";

const Card = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const callbackModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="wrapper">
            {modalOpen && <Modal setModal={callbackModal} />}
            <Header dark={true} />
            <div className="crumbs">
                <div className="crumbs__container container">
                    <a href="/" className="crumbs__link crumbs__link--active">
                        Showcase
                    </a>
                    <a href="/" className="crumbs__link">
                        The Story of one Vampire
                    </a>
                </div>
            </div>
            <section className="card">
                <div className="card__container container">
                    <div className="card__left">
                        <div className="card__img-block">
                            <div className="card__likes-block">
                                <img
                                    src="img/heart.svg"
                                    alt=""
                                    className="likes-img"
                                />
                                <p className="card__likes">255</p>
                            </div>
                            <img src="img/card.png" alt="card" />
                        </div>
                        <div className="card__btns">
                            <button
                                onClick={() => setModalOpen(!modalOpen)}
                                className="card__subscribe"
                            >
                                Subscribe
                            </button>
                            <button className="card__download">Download</button>
                            <button className="card__share">
                                <img src="img/share.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="card__right">
                        <div className="card__row">
                            <h1 className="card__title">
                                The Story of one Vampire
                            </h1>
                            <div className="card__rating">4.7</div>
                        </div>
                        <div className="card__row">
                            <p className="card__descr">Author</p>
                            <div className="card__author">Mi Shioli</div>
                            <p className="card__category">Mystery, Drama</p>
                        </div>
                        <div className="card__text">
                            In exchange for eternal life, she has to fight for
                            the right to be a vampire. Every night is a new
                            test, a new thirst for blood.
                        </div>
                        <div className="card__episodes episodes">
                            <div className="episodes__title">Episodes</div>
                            {episodes.map((item) => (
                                <div
                                    key={item.number}
                                    className="episodes__item"
                                >
                                    <img src={item.imgSrc} alt="chapter" />
                                    <div className="episodes__content">
                                        <h2 className="episodes__caption">
                                            {item.title}
                                        </h2>
                                        <div className="episodes__information">
                                            <p className="episodes__likes">
                                                {item.likes}
                                            </p>
                                            <p className="episodes__date">
                                                {item.date}
                                            </p>
                                            <p className="episodes__status">
                                                {item.status}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="episodes__number">
                                        {item.number}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Card;
