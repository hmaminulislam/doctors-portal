import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const imageHostKey = process.env.REACT_APP_Imagebb_KEY;
  const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const addDoctorHandle = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
        fetch(url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(imgData => {
          if(imgData.success) {
            const doctorInfo = {
              name: data.name,
              email: data.email,
              specialty: data.specialty,
              image: imgData.data.url,
            };
            fetch("http://localhost:5000/doctors", {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(doctorInfo)
            })
            .then(res => res.json())
            .then(data => {
              if(data.acknowledged) {
                toast.success('doctor added successful')
                navigate("/dashboard/manage-doctors");
              }
            })
          }
        })
    }
    const {data: specialtes = []} = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/appointmentSpecialty");
            const data = await res.json();
            return data
        }
    })
  
    return (
      <div className="mt-5 max-w-[380px]">
        <form
          onSubmit={handleSubmit(addDoctorHandle)}
          className="w-full px-5 md:px-8"
        >
          <h2 className="text-3xl font-semibold text-center">Add Doctor</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              className="input input-bordered w-full mb-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email required" })}
              type="email"
              className="input input-bordered w-full mb-3"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select select-bordered w-full mb-5 max-w-xs"
            >
              {specialtes &&
                specialtes?.map((specialty) => (
                  <option key={specialty._id} value={specialty?.name}>
                    {specialty?.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="input input-bordered w-full mb-3"
            />
          </div>
          <input
            type="submit"
            value="Add Doctor"
            className="btn btn-accent w-full mb-3"
          />
        </form>
      </div>
    );
};

export default AddDoctor;