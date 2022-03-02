import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__row">
                    <img
                        src="img/logo.svg"
                        alt="Fables"
                        className="footer__logo"
                    />
                    <div className="footer__links">
                        <a href="/" className="footer__text footer__privacy">
                            Private Policy
                        </a>
                        <a href="/" className="footer__text footer__terms">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
                <div className="footer__row">
                    <p className="footer__text">
                        ©Fables 2022. All rights reserved
                    </p>
                    <div className="footer__block">
                        <button className="footer__language">
                            <img src="img/language.svg" alt="language" />
                        </button>
                        <div className="footer__social">
                            <a href="/" className="footer__social-item">
                                <img src="img/vk.svg" alt="vk" />
                            </a>
                            <a href="/" className="footer__social-item">
                                <img src="img/instagram.svg" alt="instagram" />
                            </a>
                            <a href="/" className="footer__social-item">
                                <img src="img/facebook.svg" alt="facebook" />
                            </a>
                            <a href="/" className="footer__social-item">
                                <img src="img/twitter.svg" alt="twitter" />
                            </a>
                            <a href="/" className="footer__social-item">
                                <img src="img/youtube.svg" alt="youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
