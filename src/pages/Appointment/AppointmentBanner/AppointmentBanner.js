import { DayPicker } from 'react-day-picker';
import React from "react";
import chair from '../../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero my-10 lg:my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 mx-auto w-full">
          <img src={chair} className="lg:ml-20 w-max-sm rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;