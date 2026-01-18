import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  function toggleTheme() {
    if (theme === "DARK") {
      setTheme("LIGHT");
    } else {
      setTheme("DARK");
    }
  }
  return (
    <div className="flex justify-between p-2">
      <div>Navbar: {`THEME: ${theme}`}</div>
      <button
        onClick={() => {
         toggleTheme()
        }}
        className="px-3 py-2 rounded-md bg-pink-800 text-sm active:scale-95 cursor-pointer"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
