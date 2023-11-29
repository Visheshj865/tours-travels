import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import heroimg from "../assets/12.jpg";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={heroimg}
        title="YPur Jounery your story"
        text="choose your favortite desitnation"
        buttonText="Travel Plan"
        url="/"
        btnclass="show"
      />
    </>
  );
}

export default Home;
