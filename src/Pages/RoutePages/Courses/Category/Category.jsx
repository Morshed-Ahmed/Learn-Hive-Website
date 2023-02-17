import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const course = [
    {
      id: "1",
      name: "java",
    },
    {
      id: "2",
      name: "javascript",
    },
    {
      id: "3",
      name: "python",
    },
    {
      id: "4",
      name: "c++",
    },
  ];
  return (
    <div>
      <h1>Category List</h1>
      <ul className="menu menu-compact bg-base-100 p-2 rounded-box">
        <Link className="ml-3" to={"/courses"}>
          <li>All Course</li>
        </Link>
        {course.map((cr) => (
          <Link key={cr.id} to={`/courses/${cr.name}`}>
            <li>
              <h1 className="">{cr.name}</h1>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;
