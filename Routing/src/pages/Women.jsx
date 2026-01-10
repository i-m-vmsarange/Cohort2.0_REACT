import React from "react";
import { Link } from "react-router-dom";
const Women = () => {
  return (
    <div>
      <h1 className="mt-40 text-pink-500 text-8xl font-bold underline text-center">
        Women's Products
      </h1>
      <div className="text-center mt-10">
        <Link
          className=" text-xl  text-center  rounded-md px-3 py-2 border border-white w-fit"
          to={"/product"}
        >
          Go to products
        </Link>
      </div>
    </div>
  );
};

export default Women;
