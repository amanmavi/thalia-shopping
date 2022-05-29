import React from "react";
import { products } from "./allProductsData";

const BestProducts = () => {
  return (
    <>
      <div className="flex h-4/5  py-6 gap-8  p-auto justify-center ">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <section className="relative">
                <img
                  className="h-96 w-80 object-cover "
                  src={product.prodImg[0]}
                  alt="best"
                />
                <img
                  className="h-96 w-80 object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition delay-400 "
                  src={product.prodImg[1]}
                  alt="best1"
                />
                <p className="text-white bg-primary w-36 rounded text-center absolute top-2 left-2 ">
                  {product.prodType}
                </p>
                <p className="w-12 h-8 text-center   bg-secondary rounded absolute top-10 left-2">
                  {product.prodDisc}
                </p>
                <p className="text-center">{product.prodBrand}</p>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BestProducts;
