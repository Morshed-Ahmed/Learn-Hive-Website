import React from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import OurCourses from "../OurCourses/OurCourses";
import Update from "../Update/Update";

const Home = () => {
  return (
    <div className="lg:max-w-[1100px] mx-auto">
      <Banner />
      <Benefits />
      <OurCourses />
      <Update />
    </div>
  );
};

export default Home;
