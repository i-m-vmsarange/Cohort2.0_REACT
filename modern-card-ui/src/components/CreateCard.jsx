import React, { useState } from "react";

const CreateCard = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div className="w-107.5 text-black bg-white p-8 rounded-2xl shadow-lg border-2  trans-dur">
      {/* Header title */}
      <div className="flex justify-center mb-4">
        <h1 className="text-3xl mb-2 underline text-cyan-600 font-semibold text-center trans-dur">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
      </div>
      {/* Tab controls */}
      <div className="border-2 mb-5 border-gray-100 relative flex h-12 rounded-full item-center justify-evenly overflow-hidden">
        <button
          onClick={() => {
            setisLogin(true);
          }}
          className={`w-1/2 text-lg font-medium trans-dur  z-10 ${
            !isLogin ? `text-white` : `text-black`
          }`}
        >
          Login
        </button>
        <button
          onClick={() => {
            setisLogin(false);
          }}
          className={`w-1/2 text-lg font-medium trans-dur  z-10 ${
            !isLogin ? `text-black` : `text-white`
          }`}
        >
          Sign Up
        </button>
        {/* changing background div */}
        <div
          className={`w-1/2 h-full trans-dur rounded-full bg-linear-to-r from-blue-700 via-cyan-600 to-blue-200 absolute top-0 ${
            !isLogin ? `left-0` : `left-1/2`
          }`}
        ></div>
      </div>

      {/* form */}
      <form>
        {/* Here we are showing the Login Fields First as Islogin is true initially */}
        {!isLogin && (
          <input
            type="text"
            name=""
            id=""
            placeholder="Jhon Doe"
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-grey-400"
          />
        )}
        {/* Shared input field */}
        <input
          type="email"
          name=""
          id=""
          placeholder="jhon.doe@gmail.com"
          className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-grey-400"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter password"
          className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-grey-400"
        />
        {!isLogin && (
          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm password"
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-grey-400"
          />
        )}
        {/* Forget Password for login */}
        {isLogin && (
          <div>
            <p className="text-cyan-700 transition-all duration-1000 hover:underline text-right ">
              Forgot password?
            </p>
          </div>
        )}
        {/* Shared button */}
        <button className="bg-linear-to-r from-blue-700 via-cyan-600 to-blue-200 px-4 py-2 mt-4 w-full text-white text-xl font-semibold rounded-full">
          {isLogin ? "Login" : "Sign Up"}
        </button>
        {/* Switch Link */}
        <p className="mt-3 text-center  font-semibold text-md">
          {isLogin ? "Don't have an account? " : "Switch to login? "}
          <a className="hover:underline text-cyan-700 trans-dur" href="#">
            {isLogin ? "Sign up now" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default CreateCard;
