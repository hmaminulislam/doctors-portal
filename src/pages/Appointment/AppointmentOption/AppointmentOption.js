import React from 'react';

const AppointmentOption = ({appointmentOption, setTheetment}) => {
    const {name, slots} = appointmentOption;
    return (
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-xl font-bold text-secondary text-center mb-2">
            {name}
          </h2>
          <p className="text-center">{slots.length ? slots[0] : 'Try another day!'}</p>
          <p className="text-center">
            {slots.length}
            {slots.length > 1 ? " SPACES" : " SPACE"} AVAILABLE
          </p>
          <div className="card-actions justify-center mt-3">
            <label onClick={() => setTheetment(appointmentOption)}
              htmlFor="booking-modal"
              className="btn btn-secondary text-white"
              disabled={slots.length === 0}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOption;