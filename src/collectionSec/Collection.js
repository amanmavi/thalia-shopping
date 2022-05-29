import React, { useState } from "react";
import CollProducts from "../products/CollProducts";
import Filter from "../products/Filter";

const Collection = () => {
  const [filter, setFilter] = useState({
    color: [],
    prodBrand: [],
  });

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div className="col-span-9">
        <CollProducts filter={filter} />
      </div>
    </div>
  );
};

export default Collection;
