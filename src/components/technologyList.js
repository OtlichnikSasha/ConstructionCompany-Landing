import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

export const TechnologyList = ({technology}) => {
    return (
        <div className="technology_item">
            <div className="technology_item__heading">
                {technology.name}
            </div>
            <div className="technology_item__img_place">
                <div className="technology_item__img_background">
                    <img src={technology.img} alt={technology.name}/>
                </div>
            </div>
            <div className="more_btn_place">
                {technology.details}
            </div>
            <div className="more_btn">
                <FontAwesomeIcon icon={faArrowUp}/>
                <span>
                    Подробнее
                </span>

            </div>
        </div>
    );
};

