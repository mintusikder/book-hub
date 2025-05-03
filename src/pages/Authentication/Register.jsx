import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // fixed incorrect import
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // important import

const Register = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext); // useContext, not use()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const from = location?.state?.from?.pathname || "/";

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Register Success");
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error("Profile update error:", error);
          });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("Failed to register");
      });
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className="max-w-md w-full mx-auto mt-10 text-center border border-gray-300 rounded-2xl px-8 py-10 bg-white shadow-md"
      >
        <h1 className="text-gray-900 text-3xl font-semibold">Register</h1>
        <p className="text-gray-500 text-sm mt-2">
          Create an account to get started
        </p>

        {/* Name */}
        <div className="flex items-center w-full mt-8 border border-gray-300 h-12 rounded-full pl-6 gap-2">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
            required
          />
        </div>

        {/* Photo URL */}
        <div className="flex items-center w-full mt-4 border border-gray-300 h-12 rounded-full pl-6 gap-2">
          <input
            type="url"
            placeholder="Photo URL"
            name="photo"
            className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
          />
        </div>

        {/* Email */}
        <div className="flex items-center w-full mt-4 border border-gray-300 h-12 rounded-full pl-6 gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full border border-gray-300 h-12 rounded-full pl-6 gap-2">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
            required
          />
          <span className="mr-4 cursor-pointer" onClick={() => setShow(!show)}>
            {show ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Login Link */}
        <div className="mt-5 text-left text-indigo-500">
          <Link to="/login" className="text-sm">
            Already have an account? Login
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full bg-indigo-500 text-white font-medium hover:opacity-90 transition"
        >
          Register
        </button>

        {/* Terms */}
        <p className="text-gray-500 text-sm mt-4 mb-4">
          By registering, you agree to our{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>

      {/* ToastContainer */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default Register;
