import React, { useContext } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { ThemeDataContext } from "../context/ThemeContext";

const Sections = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div>
      <span className="block text-center mb-3">Sections: Theme: {theme}</span>
      <div className="flex justify-between bg-blue-500 mb-3 p-6">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Sections;
