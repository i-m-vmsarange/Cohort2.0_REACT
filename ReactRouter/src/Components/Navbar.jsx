import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="px-5 py-4 text-xl text-white font-semibold underline flex items-center justify-center gap-10 bg-pink-700">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
