import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faMailchimp, faVk, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_data">
                <div className="footer_container">
                    <div className="footer_logo">
                        <div className="footer_logo__heading">
                            Строй дом
                        </div>
                        <div className="footer_logo__subheading">
                            Архитектура
                        </div>
                    </div>
                    <nav className="footer_nav">
                        <a href="#main" className="nav_link">
                            Главная
                        </a>
                        <a href="#technology" className="nav_link">
                            Технологии
                        </a>
                        <a href="#sphere" className="nav_link">
                            Сфера деятельности
                        </a>
                        <a href="#benefits" className="nav_link">
                            Преимущества
                        </a>
                        <a href="#about" className="nav_link">
                            О компании
                        </a>
                    </nav>
                </div>
                <div className="footer_container">
                    <div className="footer_address">
                        Г. КАЛИНИНГРАД,
                        УЛ. СОВЕТСКИЙ ПРОСПЕКТ, 159
                    </div>
                    <div className="footer_social_items">
                        <a href="tel: +7 (999) 999-99-99">
                            +7 (999) 999-99-99
                        </a>
                        <a className="social_item">
                            <FontAwesomeIcon icon={faMailchimp}/>
                        </a>
                        <a className="social_item">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a className="social_item">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                        <a className="social_item">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a className="social_item">
                            <FontAwesomeIcon icon={faVk}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

