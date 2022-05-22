import React, {useEffect, useRef, useState} from 'react';
export const Header = () => {
    const menuRef = useRef(null)
    const menuLogoRef = useRef(null)
    const [changeActive, setChangeActive] = useState(true)
    const menuHandler = () => {
        menuRef.current.classList.toggle("_active")
        menuLogoRef.current.classList.toggle("_active")
        document.body.classList.toggle("hidden")
    }

    useEffect(() => {
        if(changeActive) changeActiveLink()
    }, [changeActive])

    const activeLinkTrigger = () => setChangeActive(true)

    const changeActiveLink = () => {
        const links = document.getElementsByClassName("nav_link");
        const actually_href = window.location.href.split("#");
        for(let i = 0; i < links.length; i++){
            let link = links[i];
            let href = link.getAttribute("href")
            if(`#${actually_href}` === href) {
                link.classList.add("_active")
                return setChangeActive(false)
            }
        }
    }

    return (
        <header className="header">
            <div className="header_container">
                <div className="header_logo_place">
                    <div className="logo_square">
                        <h1>Строй дом</h1>
                    </div>
                </div>
                <nav className="nav" ref={menuRef} onClick={activeLinkTrigger}>
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
                <div className="mobile_menu_place" onClick={menuHandler} ref={menuLogoRef}>
                        <span />
                        <span />
                        <span />
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

