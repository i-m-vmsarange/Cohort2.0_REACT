import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const ThemeDataContext = createContext(null);

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("LIGHT");

  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
