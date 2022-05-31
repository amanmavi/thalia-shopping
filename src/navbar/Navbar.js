import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ ShowNav }) => {
  let location = useLocation();
  return (
    <div
      className={classNames(
        { "hidden laptop:grid": !ShowNav },
        "bg-primary   grid place-content-center"
      )}
    >
      <div>
        <nav className="laptop:flex laptop:gap-4 laptop:text-xl laptop:items-center  grid text-center gap-2 ">
          <Link
            to="/home"
            className={`${
              location.pathname === "/home" ? "border-b-4 border-secondary" : ""
            } hover:border-b-4 hover:border-secondary  py-2 px-2`}
          >
            HOME
          </Link>
          <Link
            to="/collection"
            className={`${
              location.pathname === "/collection"
                ? "border-b-4 border-secondary"
                : ""
            } hover:border-b-4 hover:border-secondary  py-2 px-2`}
          >
            COLLECTION
          </Link>

          <Link
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "border-b-4 border-secondary"
                : ""
            } hover:border-b-4 hover:border-secondary  py-2 px-2`}
          >
            ABOUT
          </Link>
          <Link
            to="/blog"
            className={`${
              location.pathname === "/blog" ? "border-b-4 border-secondary" : ""
            } hover:border-b-4 hover:border-secondary  py-2 px-2`}
          >
            BLOG
          </Link>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact"
                ? "border-b-4 border-secondary"
                : ""
            } hover:border-b-4 hover:border-secondary  py-2 px-2`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
