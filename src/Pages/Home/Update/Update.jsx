import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const Update = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center bg-slate-400 p-5 h-60 rounded mt-20">
      <div>
        <h1 className="text-2xl text-white font-semibold mb-2">
          Newsletter - Stay tune and get the latest update
        </h1>
        <p className="text-white">Far far away, behind the word mountains</p>{" "}
      </div>
      <div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter email address"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <div>
                <CiLocationArrow1 size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
