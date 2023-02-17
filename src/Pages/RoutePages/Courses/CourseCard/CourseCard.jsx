import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    _id,
    imageUrl,
    title,
    shortDescription,
    authorName,
    companyName,
    category,
    price,
  } = course;
  return (
    <div>
      <div key={_id} className=" card  bg-base-100 shadow-xl">
        <figure>
          <img src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">
              <Link
                to={`/courses/details/${_id}`}
                href="/"
                className="link link-hover"
              >
                {title}
              </Link>
            </h2>
            <h2>{category}</h2>
          </div>
          <p>{shortDescription}</p>

          <div className="flex justify-between">
            <div className="flex  gap-2">
              <div className="avatar mt-1">
                <div className="w-8 h-8 rounded-full">
                  <img src={imageUrl} alt="" />
                </div>
              </div>
              <div className="">
                <h2 className="card-title">{authorName}</h2>
                <h2>{companyName}</h2>
              </div>
            </div>
            <div>
              <kbd className="kbd">{price}</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
