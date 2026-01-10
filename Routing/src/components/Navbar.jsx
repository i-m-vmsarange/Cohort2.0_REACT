import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-5 py-5 flex justify-between bg-pink-700 text-2xl text-white">
      <a href="#">Logo</a>
      <ul className="flex justify-evenly gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/courses">Courses</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
