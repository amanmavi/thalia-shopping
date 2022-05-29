import React from "react";

const Catalog = () => {
  return (
    <div className="grid place-content-center ">
      <div
        className="w-screen h-96 bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("images/cover.jpg")' }}
      >
        <h1 className="text-5xl text-secondary font-bold font-serif flex justify-center items-center h-96">
          ALL
        </h1>
      </div>
    </div>
  );
};

export default Catalog;
