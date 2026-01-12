import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Kodr from "./Components/Kodr";
import Kodex from "./Components/Kodex";

const App = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
      children: [
        {
          path: "/contact/Kodr",
          element: <Kodr />,
        },
        {
          path: "/contact/Kodex",
          element: <Kodex />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={allRoutes} />
    </>
  );
};

export default App;
