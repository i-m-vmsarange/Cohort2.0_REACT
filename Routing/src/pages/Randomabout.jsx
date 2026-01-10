import React from "react";
import { useParams } from "react-router-dom";

const Randomabout = () => {
  const params = useParams();
  return (
    <div>
      <h1 className="mt-40 text-8xl font-bold underline text-center">
        {params.name} Random About
      </h1>
    </div>
  );
};

export default Randomabout;
