import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/bdjvPMW/Untitled-design-3-removebg-preview.png"
          alt="banner"
          className=" rounded-lg "
        />
        <div>
          <p className="text-primary font-bold">WELCOME TO ACADEMIA</p>
          <h1 className="text-5xl font-bold">
            Best Online Education Expertise
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/courses"}>
            <button className="btn btn-primary">
              View Course <AiOutlineArrowRight className="ml-1" />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
