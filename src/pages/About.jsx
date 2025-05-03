import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Discover who we are, what drives us, and where we’re going.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden md:flex">
        <img
          className="h-72 md:h-auto md:w-1/2 object-cover"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800"
          alt="About cover"
        />

        <div className="p-6 md:p-10 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            We started as a small idea in a notebook—one focused on making an
            impact, not noise. Through relentless curiosity, thoughtful design,
            and a human-first approach, we’ve grown into a team that loves what
            we do and who we do it for.
          </p>
          <p className="text-gray-600">
            Whether it’s crafting books, building digital experiences, or
            solving everyday problems creatively, our mission stays the same:
            empower people through meaningful tools and stories.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
        <ul className="text-gray-600 space-y-1">
          <li>🔍 Honesty in everything we create</li>
          <li>🤝 Empathy toward users, readers, and partners</li>
          <li>🚀 Growth through innovation and learning</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
