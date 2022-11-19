import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ theetment, selectedDate, setTheetment, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = theetment;
  const date = format(selectedDate, "PP");
  const submitBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const booking = {
      appointmentDate: date,
      UserName: name,
      theetment: theetment.name,
      email,
      phone,
      slot,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking confirm");
          refetch()
          setTheetment(null);
        }
        else {
          toast.error(data.message)
          setTheetment(null);
        }
      });
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
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full mb-4"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="input input-bordered w-full mb-4"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full mb-4"
            />
            <button type="submit" className="btn btn-accent w-full mb-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;