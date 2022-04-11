import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_logo_place">
                    <div className="logo_square">

                    </div>
                    <h1>
                        Строй дом
                    </h1>
                </div>
                <nav className="nav">
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
                <div className="mobile_menu_place">
                        <span>

                        </span>
                        <span>

                        </span>
                        <span>

                        </span>
                </div>
                <div className="header_phone_place">
                    <a className="yellow_btn" href="tel: +7 (999) 999-99-99">
                        +7 (999) 999-99-99
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;