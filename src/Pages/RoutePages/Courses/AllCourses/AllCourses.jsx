import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5040/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, []);
  return (
    <div>
      <h1>All Courses</h1>
      <div className="grid lg:grid-cols-2 xs:grid-cols-1  gap-3">
        {courses.map((course) => (
          <div key={course._id} className=" card  bg-base-100 shadow-xl">
            <figure>
              <img src={course.imageUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">
                  <Link
                    to={`/courses/details/${course._id}`}
                    href="/"
                    className="link link-hover"
                  >
                    {course.title}
                  </Link>
                </h2>
                <h2>{course.category}</h2>
              </div>
              <p>{course.shortDescription}</p>

              <div className="flex justify-between">
                <div className="flex  gap-2">
                  <div className="avatar mt-1">
                    <div className="w-8 h-8 rounded-full">
                      <img src={course.imageUrl} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="card-title">{course.authorName}</h2>
                    <h2>{course.companyName}</h2>
                  </div>
                </div>
                <div>
                  <kbd className="kbd">{course.price}</kbd>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
