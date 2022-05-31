import React, { useState } from "react";

import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Router from "./Router";
import Footer from "./Footer";

function App() {
  const [ShowNav, setShowNav] = useState(false);

  return (
    <div>
      <Header ShowNav={ShowNav} setShowNav={setShowNav} />
      <Navbar ShowNav={ShowNav} />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
