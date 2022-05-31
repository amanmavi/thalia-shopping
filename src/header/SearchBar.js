import React from "react";

const SearchBar = () => {
  return (
    <>
      <div>
        <div className="flex">
          {" "}
          <input
            id="search"
            type="text"
            placeholder="What are you looking for?"
            className="hidden laptop:w-48  laptop:flex"
          />
          <label htmlFor="search">
            <img
              src="./icons/search.png"
              alt="searchIcon"
              className="w-6 laptop:mx-10 object-contain"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
