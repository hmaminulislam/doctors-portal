import { useQuery } from "@tanstack/react-query";
import React, { useContext} from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json()
            return data
        }
    })
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-semibold mb-5">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Theetment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{booking?.UserName}</td>
                <td>{booking?.theetment}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
