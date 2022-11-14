import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero md:px-5 banner-container mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="md:py-6 py-3">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
