import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

const CoursesDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://learn-hive-website-api.vercel.app/courses/single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setDetails(data.data);
      });
  }, [id]);

  const position = [51.505, -0.09];
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

                  <div className="flex justify-between">
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-title">Author Name</div>
                        <div className="stat-value">{dt?.authorName}</div>
                        <div className="stat-desc">As a software developer</div>
                      </div>
                    </div>
                    <div>
                      <kbd className="kbd">${dt?.price}</kbd>
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    <Link to={"/checkout"}>
                      <button className="btn btn-primary">
                        Get premium access
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-[300px]">
              <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesDetails;
