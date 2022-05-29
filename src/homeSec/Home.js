import React from "react";

import Categories from "./Categories";
import BestSelling from "./BestSelling";
import ResponsiveCarousel from "../Carousel";

const Home = () => {
  return (
    <>
      <ResponsiveCarousel />
      <Categories />
      <BestSelling />
    </>
  );
};

export default Home;
