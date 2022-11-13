import React from 'react';

const InfoCard = ({card}) => {
    const {name, icon, text, bgColor } = card
    return (
      <div className={`card card-side shadow-xl text-white px-6 py-4 ${bgColor}`}>
        <figure>
          <img src={icon} alt={icon} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
};

export default InfoCard;