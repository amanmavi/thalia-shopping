import React from "react";
import AllProducts from "./AllProducts";

const CollProducts = () => {
  return (
    <>
      <div className="inline-grid grid-cols-3 gap-8  py-20">
        {AllProducts.map((product) => (
          <div key={product.id}>
            <img
              className="h-96 w-80 object-cover"
              src={product.prodImg}
              alt="collection-item"
            />
            <p className="grid place-content-center font-serif py-2">
              {product.prodBrand}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollProducts;
