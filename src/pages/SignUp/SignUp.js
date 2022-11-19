import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const SignUp = () => {
  const { createUser, userUpdate } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const [createEmail, setCreateEmail] = useState('')
  const {token} = useToken(createEmail)
  const navigate = useNavigate()
  if(token) {
    navigate('/')
  }
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const handleSignUp = data => {
      setSignUpError('')
        createUser(data.email, data.password)
          .then((result) => {
            toast.success('Create user successfully.')
            const userInfo = {
              displayName : data.name
            }
            userUpdate(userInfo)
            .then(() => {
              saveUser(data.name, data.email)
            })
            .catch(error => console.log(error))
            console.log(result.user);
          })
          .catch((error) => {
            setSignUpError(error.message)
            console.log(error);
          });

          const saveUser = (name, email) => {
            const user = {name,email};
            fetch("http://localhost:5000/users", {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
              setCreateEmail(email)
            })
          }
    }
    return (
      <div className="flex justify-center items-center h-[600px] max-w-[380px] mx-auto">
        <div className="w-full px-5 md:px-8">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
            {signUpError && (
              <p className="text-red-600 text-center">{signUpError}</p>
            )}
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
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*)/,
                    message: "Password must be strong",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 charactor",
                  },
                })}
                type="password"
                className="input input-bordered w-full mb-5"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-accent w-full mb-3"
            />
            <p className="text-center mb-3">
              <span className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary">
                  Please Login
                </Link>
              </span>
            </p>
          </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    );
};

export default SignUp;