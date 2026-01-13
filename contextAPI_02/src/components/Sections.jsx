import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Sections = () => {
  const data = useContext(UserDataContext);
  console.log(data);
  return (
    <div className="bg-blue-800 px-5 py-5 text-center text-2xl font-semibold">
      All Sections
      <div className="whitespace-pre-wrap">{`Name: ${data[0].name},Username: ${data[0].username},Email: ${data[0].email},City: ${data[0].city}`}</div>
    </div>
  );
};

export default Sections;
