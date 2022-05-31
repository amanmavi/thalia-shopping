import React, { useState } from "react";
import CollProducts from "../products/CollProducts";
import Filter from "../products/Filter";
import { FaFilter } from "react-icons/fa";
import classNames from "classnames";

const Collection = () => {
  const [filter, setFilter] = useState({
    color: [],
    prodBrand: [],
  });
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-4 laptop:mt-20 px-8">
      <div className="laptop:flex-1 laptop:col-span-2  col-span-full text-center">
        <div className="pl-8">
          <button onClick={() => setShowFilter(!showFilter)}>
            Filter <FaFilter className="inline ml-2" />
          </button>
        </div>
        <div className={classNames({ hidden: !showFilter }, "col-span-2 ")}>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <div className="laptop:col-span-10 col-span-full">
        <CollProducts filter={filter} />
      </div>
    </div>
  );
};

export default Collection;
