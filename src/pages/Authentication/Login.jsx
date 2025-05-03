import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { loginUser } = use(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handelLogin}
      className="max-w-md w-full mx-auto mt-10 text-center border border-gray-300 rounded-2xl px-8 py-10 bg-white shadow-md"
    >
      <h1 className="text-gray-900 text-3xl font-semibold">Login</h1>
      <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

      <div className="flex items-center w-full mt-8 bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
            fill="#6B7280"
          />
        </svg>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
          required
        />
      </div>

      <div className="flex items-center mt-4 w-full bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
            fill="#6B7280"
          />
        </svg>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
          required
        />
      </div>

      <div className="mt-3 text-right">
        <a href="#" className="text-sm text-indigo-500 hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="mt-6 w-full h-11 rounded-full bg-indigo-500 text-white font-medium hover:opacity-90 transition"
      >
        Login
      </button>

      <p className="text-gray-500 text-sm mt-4">
        Don’t have an account?{" "}
        <Link to={"/register"} className="text-indigo-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
