import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Category from "./Category/Category";

const CoursesHome = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:max-w-[1100px] mx-auto">
        <div className="grid grid-cols-12 gap-4 xs:px-3">
          <div className="lg:col-span-2 xs:col-span-12 ">
            <Category />
          </div>
          <div className="lg:col-span-10 xs:col-span-12">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CoursesHome;
