import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../../../components/PrimaryButton';
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    return (
      <section className="make-appoinment-container mt-32">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img src={doctor} className="md:w-1/2 -mt-32 hidden md:block" alt="" />
            <div className="w-full">
              <div className='md:w-5/6'>
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h1 className="text-5xl font-bold text-white">
                  Make an appointment Today
                </h1>
                <p className="py-6 text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page
                </p>
                <PrimaryButton>Appoinment</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MakeAppoinment;