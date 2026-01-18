import React from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-6 py-3">
      <Navbar />
      <Sections />
      <Footer />
    </div>
  );
};

export default App;
