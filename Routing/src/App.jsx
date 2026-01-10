import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import { Route, Routes, useParams } from "react-router-dom";
import Courses from "./pages/Courses";
import Randomabout from "./pages/Randomabout";
import Anycourse from "./pages/Anycourse";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          {/* General routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/courses" element={<Courses />} />

          {/* Nested Routes */}
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />

          {/* Dynamic Routes */}
          <Route path="/about/:name" element={<Randomabout />} />
          <Route path="/courses/:id" element={<Anycourse />} />

          {/* Nested Dynamic Routes */}
          <Route path="/courses/:id/details" element={<CourseDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
