import React from "react";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="mt-40 text-5xl font-bold underline text-center">
        Contact Page
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Contact;
