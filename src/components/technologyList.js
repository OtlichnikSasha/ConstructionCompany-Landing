import React from 'react';

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
            <div className="more_btn">
                <span>
                    Подробнее
                </span>
            </div>
        </div>
    );
};

