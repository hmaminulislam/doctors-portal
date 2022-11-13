import React from 'react';

const Testimonnial = ({review}) => {
    const {name, text, img, location} = review
    return (
      <div className="card shadow-2xl">
        <div className="card-body">
          <p>{text}</p>
          <div className="card-actions mt-4">
            <div className="avatar mr-4">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h4 className='text-lg font-semibold'>{name}</h4>
              <h5>{location}</h5>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonnial;