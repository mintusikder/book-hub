import React from "react";
import cover from "../../assets/cover.jpg"
const Banner = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="h-[580px] flex flex-col items-center justify-center px-4 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <h1 className="text-3xl text-white sm:text-5xl md:text-6xl font-bold max-w-4xl ">
          Find Your Book Of Choice.
        </h1>
        <p className="max-w-xl text-center mt-6 mb-6 px-4 text-white">
          Unlock potential with tailored strategies designed for success.
          Simplify challenges, maximize results, and stay ahead in the
          competitive market.
        </p>
        <div className="w-full max-w-md md:w-[400px] flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-white/90 backdrop-blur-sm">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search book"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
