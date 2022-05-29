import React from "react";
import BestProducts from "../products/BestProducts";

const BestSelling = () => {
  return (
    <div className="py-10  font-serif grid place-content-center">
      <p className="text-4xl w-full grid place-content-center font-semibold">
        Best Selling{" "}
      </p>
      <BestProducts />
    </div>
  );
};

export default BestSelling;
