import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Section2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className="flex flex-col justify-evenly">
      <div>Section2</div>
      <div>Theme: {theme}</div>
    </div>
  );
};

export default Section2;
