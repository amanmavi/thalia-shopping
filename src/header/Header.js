import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import LoginArea from "./LoginArea";
import SearchBar from "./SearchBar";
import SocialMedia from "./SocialMedia";

const Header = ({ ShowNav, setShowNav }) => {
  return (
    <div className="laptop:pt-8">
      <div className="w-3/4  mx-auto border-b hidden laptop:flex  justify-between px-8 pb-2">
        <div>
          <p>Free shipping for standard order over $100</p>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
      <div className="my-6 laptop:w-3/4 mx-auto grid grid-flow-col px-4 laptop:px-8">
        <div>
          <SearchBar />
        </div>
        <div>
          <Link
            to="/home"
            className="pointer text-2xl font-bold  ml-20 font-serif text-secondary"
          >
            THALIA
          </Link>
        </div>
        <div className="flex justify-end">
          <LoginArea />
          <button
            className="tablet:hidden ml-4"
            onClick={() => setShowNav(!ShowNav)}
          >
            <span>
              <AiOutlineMenu className="inline" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
