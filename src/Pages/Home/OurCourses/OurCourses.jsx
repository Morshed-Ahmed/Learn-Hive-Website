import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const OurCourses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://learn-hive-website-api.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setCourses(data.data);
      });
  }, []);
  return (
    <div>
      <div className="xs:m-7">
        <div className="text-center">
          <h2 className="text-primary font-semibold text-2xl"> OUR COURSES </h2>
          <h1>Explore Our Popular Online Courses</h1>
        </div>

        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course._id}>
              <div className="card m-2 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={course?.imageUrl}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{course?.title}</h2>
                  <p>{course?.shortDescription}</p>
                  <h1 className="text-xl font-semibold">${course?.price}</h1>
                  <div className="card-actions">
                    <Link to={`/courses/details/${course._id}`}>
                      <button className="btn btn-primary">
                        Course Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurCourses;
