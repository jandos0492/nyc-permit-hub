import React from "react";

const AutoRussianTrafficSignsCard = ({ no, image, descriptionRussian }) => {
    return (
        <article className="traffic-sign-card">
            <h4 className="traffic-sign-card__number">{no}</h4>
            <div className="traffic-sign-card__content">
                <img src={image} alt="Traffic sign" className="traffic-sign-card__image" />
                <p className="traffic-sign-card__description">{descriptionRussian}</p>
            </div>
        </article>
    )
}

export default AutoRussianTrafficSignsCard;