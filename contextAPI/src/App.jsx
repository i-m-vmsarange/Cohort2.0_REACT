import AllSections from "./components/AllSections";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("LIGHT");
  const changeTheme = function (newTheme) {
    console.log("Original Theme: ", theme);
    console.log("Changed Theme: ", newTheme);
    setTheme(newTheme);
  };
  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
    </>
  );
};

export default App;
