import React, { useState, useEffect } from "react";
import AllProducts from "./AllProducts";

const CollProducts = ({ filter }) => {
  const [products, setProducts] = useState(AllProducts);
  useEffect(() => {
    console.table(filter);

    let temp = AllProducts;
    for (const [key, value] of Object.entries(filter)) {
      if (value.length) {
        temp = temp.filter((_) => {
          return filter[key].includes(_[key]);
        });
      }
    }
    setProducts(temp);
  }, [filter]);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 py-20">
        {products.map((product) => (
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
