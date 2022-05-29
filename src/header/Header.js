import React from "react";
import LoginArea from "./LoginArea";
import SearchBar from "./SearchBar";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto border-b flex justify-between px-8">
        <div>
          <p>Free shipping for standard order over $100</p>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
      <div className="my-6 w-3/4 mx-auto flex justify-around">
        <div className="w-1/3">
          <SearchBar />
        </div>
        <div className="w-1/3">
          <Link
            to="/home"
            className="pointer text-2xl font-bold font-serif text-secondary"
          >
            THALIA
          </Link>
        </div>
        <div className="flex gap-3 ">
          <LoginArea />
          <img
            src="./icons/shopBag.png"
            alt="shopBag"
            className="w-6 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
