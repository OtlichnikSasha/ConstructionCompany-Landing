import React from 'react';
import main_slide from "../static/img/main_slide.png"
import {faVk, faInstagram, faFacebook, faWhatsapp, faMailchimp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import sphere1 from '../static/img/sphere1.png'
import sphere2 from '../static/img/sphere2.png'
import sphere3 from '../static/img/sphere3.png'
import sphere4 from '../static/img/sphere4.png'
import advantage1 from '../static/img/advantage1.png'
import advantage2 from '../static/img/advantage2.png'
import advantage3 from '../static/img/advantage3.png'
import advantage4 from '../static/img/advantage4.png'
import advantage5 from '../static/img/advantage5.png'
import advantage6 from '../static/img/advantage6.png'
import advantage7 from '../static/img/advantage7.png'
import advantage8 from '../static/img/advantage8.png'
import about1 from '../static/img/about1.png'
import about2 from '../static/img/about2.png'
import wooden_houses from '../static/img/wooden_houses.png'
import combined_houses from '../static/img/combined_houses.png'
import frame_houses from '../static/img/frame_houses.png'
import half_timbered_houses from '../static/img/half-timbered_houses.png'
import {Navigation, A11y, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {SphereList} from "../components/sphereList";
import {BenefitsList} from "../components/benefitsList";
import {TechnologyList} from "../components/technologyList";

export const Index = () => {
    const spheres = [
        {
            id: 1,
            heading: "ИНДИВИДУАЛЬНОЕ ПРОЕКТИРОВАНИЕ",
            img: sphere1,
            description: "Эксклюзивное проектирование Вашего дома в сочетании с новаторскими технологиями"
        },
        {
            id: 2,
            heading: "ПОДБОР ЗЕМЕЛЬНОГО УЧАСТКА",
            img: sphere2,
            description: "Правильный выбор экологически благоприятных районов, инженерно-геологические изыскания и изучение окружающего ландшафта"
        },
        {
            id: 3,
            heading: "Жилая среда",
            img: sphere3,
            description: "Индивидуальные комплексные решения вопросов энергоэффективности, функциональности \n" +
                "и экологичности"
        },
        {
            id: 4,
            heading: "СТРОИТЕЛЬСТВО ДОМОВ",
            img: sphere4,
            description: "Воплощение самых смелых и оригинальных архитектурных решений в соответствии с техническими стандартами \n" +
                "и нормами"
        }
    ]
    const benefits = [
        {id: 1, description: "Строительство и оснащение дома с момента создания проекта до отделки", img: advantage1},
        {id: 2, description: "Все материалы сертифицированы по российским и европейским стандартам", img: advantage2},
        {id: 3, description: "Гарантийные обязательства 25 лет", img: advantage3},
        {id: 4, description: "Цены от 30 000 рублей за м2", img: advantage4},
        {
            id: 5, description: "Экологичность, энергоэффективность и высокое качество материалов \n" +
                "по доступным ценам", img: advantage5
        },
        {id: 6, description: "Сроки возведения дома от 2-х месяцев, точное следование графику", img: advantage6},
        {
            id: 7,
            description: "Патент на эксклюзивные современные методы строительства и технологии будущего",
            img: advantage7
        },
        {
            id: 8, description: "Уникальная дизайнерская работа в устройстве \n" +
                "и оформлении дома", img: advantage8
        }
    ]

    const technologies = [
        {
            id: 1, name: "Деревянные дома", img: wooden_houses, details: "Уютные дома из сруба \n" +
                "и кленового бруса \n" +
                "под ключ по выгодным ценам"
        },
        {
            id: 2, name: "Каркасные дома", img: frame_houses, details: "Уютные дома из сруба \n" +
                "и кленового бруса \n" +
                "под ключ по выгодным ценам"
        },
        {
            id: 3, name: "Комбинированные дома", img: combined_houses, details: "Уютные дома из сруба \n" +
                "и кленового бруса \n" +
                "под ключ по выгодным ценам"
        },
        {
            id: 4, name: "Фахверковые дома", img: half_timbered_houses, details: "Уютные дома из сруба \n" +
                "и кленового бруса \n" +
                "под ключ по выгодным ценам"
        }
    ]

    const pagination = {
        clickable: true
    }
    return (
        <>
            {/* Main section */}
            <section className="main_section" id="main">
                <div className="container">
                    <div className="main_section__social">
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

                    <div className="main_section__data">
                        СТРОИТЕЛЬСТВО И ОСНАЩЕНИЕ ДОМОВ ОТ “КОМФОРТ”
                        ДО “ЭЛИТ” КЛАССА
                    </div>
                    <Swiper
                        modules={[Navigation, A11y, Pagination]}
                        slidesPerView={1}
                        navigation
                        scrollbar={{draggable: true}}
                        pagination={pagination}
                    >
                        <SwiperSlide>
                            <div className="main_section__slider">
                                <div className="slider_background">
                                    <img src={main_slide} alt="main_slide" className="slider_img"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main_section__slider">
                                <div className="slider_background">
                                    <img src={main_slide} alt="main_slide" className="slider_img"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main_section__slider">
                                <div className="slider_background">
                                    <img src={main_slide} alt="main_slide" className="slider_img"/>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
            {/* Technology section */}
            <section className="technology_section" id="technology">
                <div className="technology_section__data">
                    <div className="yellow_rectangle"/>
                    <div className="yellow_rectangle"/>
                    <div className="container_data">
                        <div className="heading">
                            ТЕХНОЛОГИИ СТРОИТЕЛЬСТВА
                        </div>
                        <div className="black_line" />
                        <div className="technology_item_place">
                            {technologies.map(technology => {
                                return (
                                    <TechnologyList technology={technology} key={technology.id}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/* Sphere */}
            <section className="sphere_section" id="sphere">
                <div className="container_data">
                    <div className="heading">
                        СФЕРА ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div className="sphere_items_place">
                        {spheres.map(sphere => {
                            return (
                                <SphereList sphere={sphere} key={sphere.id}/>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* Benefits section */}
            <section className="benefits_section" id="benefits">
                <div className="container_data">
                    <div className="heading">
                        Наши преимущества
                    </div>
                    <div className="benefits_place">
                        {benefits.map(advantage => {
                            return (
                                <BenefitsList advantage={advantage}/>
                            )
                        })}
                    </div>


                </div>
            </section>
            {/* About section */}
            <section className="about_section" id="about">
                <div className="container_data">
                    <div className="heading">
                        О компании
                    </div>
                    <div className="about_item">
                        <div className="about_item__img_place">
                            <img src={about1} alt="О компании"/>
                            <div className="yellow_rectangle"/>
                        </div>
                        <div className="about_item__data">
                            <div className="about_item__heading">
                                Компания «Строй Дом Архитектура»
                            </div>
                            Компания осуществляет строительство и оснащение домов классов «комфорт», «бизнес» и «элит»
                            под ключ
                            с применением высококачественных материалов, способных прослужить в течение длительного
                            времени.
                        </div>
                    </div>
                    <div className="about_item">
                        <div className="about_item__img_place second_img">
                            <img src={about2} alt="О компании"/>
                            <div className="yellow_rectangle" />
                            <div className="yellow_rectangle" />
                        </div>
                        <div className="about_item__data">
                            Мы обладаем патентом на уникальные технологии и умело сочетаем многолетний опыт с
                            новаторскими техниками. Мы создаем проекты при участии именитых архитекторов и
                            проектировщиков с многолетним стажем. Мы воплотим уникальный проект Вашего дома в кратчайшие
                            сроки!
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};