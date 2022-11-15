import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const [loginEroor, setLoginEroor] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/'
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = data => {
    setLoginEroor('')
    signIn(data.email, data.password)
    .then(result => {
      navigate(from, {replace: true})
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
      setLoginEroor(error.message)
    })
  }
  return (
    <div className="flex justify-center items-center h-[600px] max-w-[380px] mx-auto">
      <div className="w-full px-5 md:px-8">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h2 className="text-3xl font-semibold text-center">Login</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
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
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-600">Password at least 6 charactors</span>
            )}
          </div>
          <label className="label">
            <Link className="label-text text-sm mb-3">Forget password?</Link>
          </label>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full mb-3"
          />
          <p className="text-center mb-3">
            <span className="text-sm">
              New Doctors portal?{" "}
              <Link to="/signup" className="text-secondary">
                Create account
              </Link>
            </span>
          </p>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        {loginEroor && <p className="text-red-500">{loginEroor}</p>}
      </div>
    </div>
  );
};

export default Login;
