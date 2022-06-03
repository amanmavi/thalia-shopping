import React, { useState, useEffect } from "react";
import AllProducts from "./AllProducts";

const CollProducts = ({ filter }) => {
  const [products, setProducts] = useState(AllProducts);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.table(filter);

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

  useEffect(() => {
    setLoading(false);
  }, [products]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="grid laptop:grid-cols-3 gap-8 ">
          {products.map((product) => (
            <div key={product.id}>
              <img
                className="h-96 w-80 object-cover"
                src={product.prodImg}
                alt="collection-item"
              />
              <p className="text-center font-serif py-2">{product.prodBrand}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CollProducts;
