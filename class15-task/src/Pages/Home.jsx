import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-red-500 text-white px-6 py-3 text-5xl text-center underline font-bold">
        Home Page
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => {
            navigate("/products");
          }}
          className="px-3 py-2 text-white bg-green-700 rounded-md font-semibold mt-5 active:scale-95 cursor-pointer"
        >
          Explore Products
        </button>
      </div>
    </>
  );
};

export default Home;
