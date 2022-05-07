import React from 'react';

export const SphereList = ({sphere}) => {
    return (
        <div className="sphere_item">
            <div className="sphere_item__photo_place">
                <img src={sphere.img} alt={sphere.heading}/>
            </div>
            <div className="sphere_item__data">
                <div className="heading">
                    {sphere.heading}
                </div>
                {sphere.description}
            </div>
        </div>
    )
};

