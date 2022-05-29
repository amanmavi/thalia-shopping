import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./homeSec/Home";
import Collection from "./collectionSec/Collection";
import Catalog from "./catalogSec/Catalog";
import About from "./aboutSec/About";
import Blog from "./blogSec/Blog";
import Contact from "./contactSec/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
