import React from "react";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <div className="bg-primary grid place-content-center ">
      <nav className="flex gap-4 text-xl h-12 items-center ">
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
          to="/catalog"
          className={`${
            location.pathname === "/catalog"
              ? "border-b-4 border-secondary"
              : ""
          } hover:border-b-4 hover:border-secondary  py-2 px-2`}
        >
          CATALOG
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "border-b-4 border-secondary" : ""
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
  );
};

export default Navbar;
