import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ theetment, selectedDate, setTheetment }) => {
  const { name, slots } = theetment;
  const date = format(selectedDate, "PP");
  const submitBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const bookingInfoUser = {
      appointmentDate: date,
      UserName: name,
      theetment: theetment.name,
      email,
      phone,
    };
    console.log(bookingInfoUser, setTheetment(null));
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary text-white btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={submitBooking}>
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full my-4"
            />
            <select name="slot" className="select select-bordered w-full mb-4">
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mb-4"
            />
            <button
              // type="submit"
              // value="Submit"
              className="btn btn-accent w-full mb-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;