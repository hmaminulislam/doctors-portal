import React from 'react';
import treatmentImg from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton';

const ServiceInfo = () => {
    return (
      <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={treatmentImg}
              className="lg:w-4/6 mx-auto rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="lg:w-1/2">
            <div className="lg:w-5/6">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <PrimaryButton>Get started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceInfo;