import React from "react";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      image: "https://i.ibb.co/52T9WDZ/webinar.png",
      title: "Online Courses",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/cL15KwN/certificate.png",
      title: "Earn A Certificates",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/5xt1ntv/badge.png",
      title: "Learn with Expert",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];
  return (
    <div className="my-10">
      <div className="grid grid-cols-12 gap-5 xs:mx-3">
        <div className="lg:col-span-6 xs:col-span-12 ">
          <img
            className="h-[100%] object-cover"
            src="https://preview.colorlib.com/theme/academia/images/about.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-6 xs:col-span-12 ">
          <div>
            <h2 className="text-primary font-semibold">LEARN ANYTHING</h2>
            <h2 className=" lg:text-4xl xs:text-2xl mt-3 mb-6">
              Benefits About Online Learning Expertise
            </h2>

            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex gap-3 p-3 bg-[#F1EFF0] rounded-md mb-3"
              >
                <div>
                  <img className="w-20" src={benefit?.image} alt="" />
                </div>
                <div>
                  <h1 className="text-2xl mb-2">{benefit?.title}</h1>
                  <p>{benefit?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
