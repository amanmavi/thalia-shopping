import React from "react";

const AboutIntro = () => {
  return (
    <div className="laptop:flex justify-center ">
      <div className="laptop:flex  p-4 gap-10 py-10 laptop:w-3/4 w-full justify-center ">
        <div>
          <img src="./images/aboutUs_Pics/about_img1.jpg" alt="image1" />
        </div>
        <div className="laptop:w-1/3 w-full">
          <p className="text-3xl font-bold pt-4 laptop:pt-0 ">ABOUT US</p>
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
            className="laptop:mt-14 mt-8"
            src="./images/aboutUs_Pics/sign.jpg"
            alt="sign"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
