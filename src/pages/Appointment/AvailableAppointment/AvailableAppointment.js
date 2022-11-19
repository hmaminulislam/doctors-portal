import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [theetment, setTheetment] = useState(null)
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
      queryKey: ["appointmentOptions", date],
      queryFn: () =>
        fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then((res) =>
          res.json()
        ),
    });

    if(isLoading) {
      return <Loading></Loading>
    }
    
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
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    );
};

export default AvailableAppointment;