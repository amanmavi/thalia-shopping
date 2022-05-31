import React from "react";

const Members = [
  {
    id: "mem1",
    memImg: "./images/aboutUs_Pics/about_img2.jpg",
    memName: "Joanna Smith",
    memPos: "Fashion Design",
  },
  {
    id: "mem2",
    memImg: "./images/aboutUs_Pics/about_img3.jpg",
    memName: "Christine Wise",
    memPos: "CEO",
  },
  {
    id: "mem3",
    memImg: "./images/aboutUs_Pics/about_img4.jpg",
    memName: "Chrissy Robbins",
    memPos: "Manager",
  },
  {
    id: "mem4",
    memImg: "./images/aboutUs_Pics/about_img5.jpg",
    memName: "Lucas Myers",
    memPos: "Logistics",
  },
];
const AboutTeam = () => {
  return (
    <>
      <p className="text-2xl font-bold grid place-content-center laptop:py-10 py-2">
        Our Team
      </p>
      <div className="laptop:flex  grid  gap-8  justify-center  pb-12">
        {Members.map((member) => (
          <div key={member.id}>
            <img src={member.memImg} alt="member" />
            <div className="grid place-content-center font-semibold text-xl  laptop:py-4">
              {member.memName}
            </div>
            <div className="grid place-content-center"> {member.memPos}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutTeam;
