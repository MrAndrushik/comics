import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SearchSlider from "../components/SearchSlider";

const Search = () => {
    const categories = [
        {
            imgSrc: "img/supernatural.svg",
            caption: "Supernatural",
        },
        {
            imgSrc: "img/sports.svg",
            caption: "Sports",
        },
        {
            imgSrc: "img/heartwarming.svg",
            caption: "Heartwarming",
        },
        {
            imgSrc: "img/horror.svg",
            caption: "Horror",
        },
        {
            imgSrc: "img/drama.svg",
            caption: "Drama",
        },
        {
            imgSrc: "img/romance.svg",
            caption: "Romance",
        },
        {
            imgSrc: "img/thriller.svg",
            caption: "Thriller",
        },
        {
            imgSrc: "img/fantasy.svg",
            caption: "Fantasy",
        },
        {
            imgSrc: "img/superhero.svg",
            caption: "Superhero",
        },
        {
            imgSrc: "img/action.svg",
            caption: "Action",
        },
        {
            imgSrc: "img/supernatural-1.svg",
            caption: "Slice of live",
        },
        {
            imgSrc: "img/romance.svg",
            caption: "Romance",
        },
        {
            imgSrc: "img/thriller.svg",
            caption: "Thriller",
        },
        {
            imgSrc: "img/fantasy.svg",
            caption: "Fantasy",
        },
        {
            imgSrc: "img/superhero.svg",
            caption: "Superhero",
        },
        {
            imgSrc: "img/action.svg",
            caption: "Action",
        },
        {
            imgSrc: "img/supernatural-1.svg",
            caption: "Slice of live",
        },
        {
            imgSrc: "img/romance.svg",
            caption: "Romance",
        },
    ];

    return (
        <div className="wrapper">
            <Header dark={true} />
            <section className="search">
                <div className="search__container container">
                    <h1 className="search__title">Search</h1>
                    <p className="seacrh__descr">
                        Choose a genre or use the search
                    </p>
                    <div className="search__wrapper">
                        <SearchSlider categories={categories} />
                    </div>
                    <SearchInput />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Search;
