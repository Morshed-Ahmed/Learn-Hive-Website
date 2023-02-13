import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Courses = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:w-[1100px] mx-auto">
        <h1>Courses</h1>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
