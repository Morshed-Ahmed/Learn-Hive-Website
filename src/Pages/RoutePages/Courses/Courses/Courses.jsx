import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const { name } = useParams();
  //   console.log(name);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5040/courses/${name}`)
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, [name]);

  return (
    <div>
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-3">
        {courses.length === 0 && <h1>This category product is empty</h1>}
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
