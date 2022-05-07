import React from 'react';

export const BenefitsList = ({advantage}) => {
    return (
        <div className="advantage_item">
            <div className="advantage_item__img_place">
                <img src={advantage.img} alt={advantage.description}/>
            </div>
            <div className="advantage_item__description">
                {advantage.description}
            </div>
        </div>
    );
};

