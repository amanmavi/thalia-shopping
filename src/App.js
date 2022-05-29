import React from "react";

import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Router from "./Router";
import Footer from "./Footer";

function App() {
  return (
    <div className="py-10">
      <Header />
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
