import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
const Footer = () => {
  const data = useContext(UserDataContext);
  return (
    <div className="absolute bottom-0 w-full bg-emerald-800 px-5 py-5 text-center text-2xl font-semibold">
      Footer
      <h1>{`${data[0].username},${data[0].name},${data[0].email}`}</h1>
    </div>
  );
};

export default Footer;
