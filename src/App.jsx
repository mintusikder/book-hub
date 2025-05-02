import React from 'react';
import "./App.css";

function App() {
  return (


<main className="mx-auto px-4 sm:px-8 lg:px-12 mt-8 pb-12">
<section className="mt-8 md:mt-28 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto">
  <img
    className="w-24 md:w-28"
    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg"
    alt="Thinking"
  />
  <div className="text-center md:text-center max-w-3xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-black">
      Increase Awareness with
      <span className="block font-bold text-gray-900 mt-1 relative">
        Content Marketing
        <svg
          className="absolute -bottom-7 w-full h-4 md:h-5"
          width="370"
          height="26"
          viewBox="0 0 370 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M310.521 0L..."
            fill="#FFEDD5"
          />
        </svg>
      </span>
    </h1>
  </div>
</section>
</main>
  
  )
}

export default App;
