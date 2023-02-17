import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoursesDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5040/courses/single/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  }, [id]);
  return (
    <div>
      {details.map((dt) => (
        <div key={dt._id}>
          <div className="card  bg-base-100 shadow-xl">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-5 xs:col-span-12 ">
                <figure>
                  <img className="mt-3" src={dt?.imageUrl} alt="Album" />
                </figure>
              </div>
              <div className="lg:col-span-7 xs:col-span-12 mt-[-20px]">
                <div className="card-body ">
                  <h2 className="card-title">{dt?.title}</h2>
                  <p>{dt?.shortDescription}</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus commodi omnis perferendis saepe accusantium accusamus
                    incidunt enim debitis? Nihil officia, asperiores ab
                    provident rem assumenda perspiciatis doloribus reprehenderit
                    odit hic. Lorem ipsum dolor sit, amet consectetur <br />
                    adipisicing elit. Natus commodi omnis perferendis saepe
                    accusantium accusamus incidunt enim debitis? Nihil officia,
                    asperiores ab provident rem assumenda perspiciatis doloribus
                    reprehenderit odit hic.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesDetails;
