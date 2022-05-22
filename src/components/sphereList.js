import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
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
                <div className="go_to_section">
                    Перейти в раздел <span className="yellow_line" /> <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    )
};

