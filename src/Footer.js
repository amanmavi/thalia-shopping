import React from "react";

import SocialMedia from "./header/SocialMedia";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-around border-t px-12 py-8">
      <div className="w-1/4 gap-y-2 grid">
        <h1 className="pointer font-bold text-2xl">THALIA</h1>
        <p>
          Any questions? Let us know in store at 8th floor, 379 Hudson St, New
          York, NY 10018 or call us on (+1)967166879
        </p>
        <div>
          <SocialMedia />
        </div>
        <p>
          Copyright <span>&copy;</span> 2022 All rights reserved.
        </p>
      </div>
      <div className=" gap-y-2 grid">
        <h1 className="pointer  font-bold font-serif ">QUICK LINKS</h1>
        <p className="cursor-pointer">Purchase</p>
        <p className="cursor-pointer">Payment</p>
        <p className="cursor-pointer">Shipping</p>
        <p className="cursor-pointer">Return</p>
        <p className="cursor-pointer">Policies</p>
      </div>
      <div className=" gap-y-2 grid">
        <h1 className="pointer  font-bold font-serif ">BRAND</h1>
        <p className="cursor-pointer">Fendi</p>
        <p className="cursor-pointer">Tag Heuer</p>
        <p className="cursor-pointer">Yves Lauren</p>
        <p className="cursor-pointer">Red River</p>
        <p className="cursor-pointer">Banana Republic</p>
      </div>
      <div className=" gap-y-2 grid">
        <h1 className="pointer  font-bold font-serif ">NEWS LETTER</h1>
        <p>Subscribe your email to get the latest news and new offers.</p>
        <div className="flex border h-10 pl-4 rounded justify-between">
          <input className="" type="email" placeholder="Email Address" />
          <Link
            to="/"
            className="w-1/5  bg-secondary grid place-content-around"
          >
            <SiMinutemailer className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
