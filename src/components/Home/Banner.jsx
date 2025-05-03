import React from "react";
import cover from "../../assets/cover.jpg";

const Banner = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Search icon remains the same */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
