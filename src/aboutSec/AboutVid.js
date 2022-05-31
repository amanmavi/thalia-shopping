import React from "react";

import { FaHeadphones } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { HiBadgeCheck } from "react-icons/hi";
import ReactPlayer from "react-player/youtube";

const Texts = [
  {
    id: "1",
    logo: <FaHeadphones />,
    heading: "Support 24/7",
    para: "We provide support 24/7.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: "2",
    logo: <GiReturnArrow />,
    heading: "Easy to Return",
    para: "We provide easy return.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: "3",
    logo: <HiBadgeCheck />,
    heading: "High quality",
    para: "We provide high quality products.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

const AboutVid = () => {
  return (
    <div className="bg-slate-200 p-8">
      <p className="text-2xl font-semibold grid place-content-center mb-8">
        WHY CHOOSE US
      </p>
      <div className="flex flex-col laptop:flex-row space-y-8 justify-evenly">
        <div className=" laptop:w-1/3 w-full space-y-8">
          {Texts.map((text) => (
            <div className="flex gap-4" key={text.id}>
              <div className="text-2xl flex items-center">{text.logo}</div>
              <div>
                <div className="font-semibold text-xl">{text.heading}</div>
                <div className="font-mono"> {text.para}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-auto laptop:w-1/3 rounded laptop:rounded-md shadow overflow-hidden">
          <ReactPlayer
            width="auto"
            height="100%"
            controls
            url="https://youtu.be/ScMzIvxBSi4"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVid;
