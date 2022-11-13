import React from 'react';

const Service = ({service}) => {
    const {name, text, img} = service
    return (
      <div className="card w-96 bg-gray-100 rounded-md shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt={name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
};

export default Service;