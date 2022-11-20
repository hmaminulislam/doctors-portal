import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const closeModal = () => {
    setDeleteDoctor(null)
  }
  const handleDeleteDoctor = doctor => {
    console.log(doctor)
  }
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Manage Doctors: {doctors?.length}
      </h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Eamil</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeleteDoctor(doctor)}
                    htmlFor="doctor-confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deleteDoctor.name} before you undone`}
          closeModal={closeModal}
          successAction={handleDeleteDoctor}
          modalData={deleteDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
