import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonnial from './Testimonnial';
import quote from '../../../assets/icons/quote.svg';

const Testimonials = () => {
    const reviews = [
      {
        _id: 1,
        name: "Winson Herry",
        location: "California",
        img: people1,
        text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      },
      {
        _id: 2,
        name: "Merisyos",
        location: "New Work",
        img: people2,
        text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      },
      {
        _id: 3,
        name: "Denialion",
        location: "Wasintion",
        img: people3,
        text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      },
    ];
    return (
      <div className="my-20">
        <div className='flex justify-between items-center'>
          <div>
            <h3 className="text-xl font-bold text-primary">Testimonial</h3>
            <h2 className="text-3xl font-semibold">What Our Patients Says</h2>
          </div>
          <img className='w-32 lg:w-44' src={quote} alt="" />
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {reviews.map((review) => (
            <Testimonnial key={review._id} review={review}></Testimonnial>
          ))}
        </div>
      </div>
    );
};

export default Testimonials;