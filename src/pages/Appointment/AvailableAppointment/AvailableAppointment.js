import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [theetment, setTheetment] = useState(null)
    useEffect( () => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
      <div className="mx-5">
        <div className="my-10">
          <p className="text-lg font-bold text-secondary text-center">
            Available Appointments on {format(selectedDate, "PP")}
          </p>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {appointmentOptions.map((option) => (
            <AppointmentOption
              key={option._id}
              appointmentOption={option}
              setTheetment={setTheetment}
            ></AppointmentOption>
          ))}
        </div>
        {theetment && (
          <BookingModal
            theetment={theetment}
            selectedDate={selectedDate}
            setTheetment={setTheetment}
          ></BookingModal>
        )}
      </div>
    );
};

export default AvailableAppointment;