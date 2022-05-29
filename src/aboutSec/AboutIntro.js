import React from "react";

const AboutIntro = () => {
  return (
    <div className="flex justify-center">
      <div className="flex  gap-10 py-10 w-3/4 justify-center ">
        <div>
          <img src="./images/aboutUs_Pics/about_img1.jpg" alt="image1" />
        </div>
        <div className="w-1/3">
          <p className="text-3xl font-bold">ABOUT US</p>
          <p className=" text-xl font-semibold">
            Over 20 years of experience in fashion-related fields
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <img
            className="mt-14"
            src="./images/aboutUs_Pics/sign.jpg"
            alt="sign"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
