import React from 'react';
import main_slide from "../static/img/main_slide.png"

export const Index = () => {
    return (
        <>
            {/* Main section */}
            <section className="main_section">
                <div className="container">

                    <div className="main_section__social">
                        <a className="fas fa-twitter">

                        </a>
                        <a className="fas fa-twitter">

                        </a>
                        <a className="fas fa-whatsapp">

                        </a>
                        <a className="fas fa-instagram">

                        </a>
                        <span className="fas fa-vk">

                        </span>
                    </div>

                    <div className="main_section__data">

                    </div>
                    <div className="main_section__slider">
                        <div className="slider_background">
                            <img src={main_slide} alt="main_slide" className="slider_img"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technology section */}
            <section className="technology_section">
                <div className="technology_section__data">
                    <div className="container">
                        <div className="yellow_rectangle">

                        </div>
                        <div className="yellow_rectangle">

                        </div>
                        <div className="container_data">
                            <div className="heading">
                                ТЕХНОЛОГИИ СТРОИТЕЛЬСТВА
                            </div>
                            <div className="black_line">

                            </div>
                            <div className="technology_item_place">
                                <div className="technology_item">

                                </div>
                                <div className="technology_item">

                                </div>
                                <div className="technology_item">

                                </div>
                                <div className="technology_item">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};