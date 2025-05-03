import React, { useState } from "react";
import Books from "../components/Books/Books";
import About from "./About";
import Banner from "../components/Home/Banner";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Books searchQuery={searchQuery} />
      <About />
    </div>
  );
};

export default Home;
