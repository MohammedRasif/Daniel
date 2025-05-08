// Header.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";
import logo from "/logo.png";

const Header = ({ bg, title }) => {
  return (
    <div
      className={`${
        bg &&
        "bg-[url(https://i.ibb.co.com/3YyNxcSV/beautiful-shot-waterfall-coming-down-from-mountains.jpg)] bg-no-repeat bg-cover bg-center"
      } bg-[#f0f0f0] bg-opacity-75 p-6 flex flex-col items-center text-center relative h-[500px] rounded-b-3xl`}
    >
      <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-full">
        <img src="/icon.png" alt="" />
      </div>
      {/* backgrounds */}
      {!bg && (
        <>
          <img src="/Group.png" alt="" className="absolute top-0 right-0" />
          <img
            src="/leftBottom.png"
            alt=""
            className="absolute bottom-0 left-0 z-10"
          />
        </>
      )}
      {/* Logo Placeholder - Replace with your logo */}
      <div
        className={`flex flex-col h-full  ${
          title ? "justify-end w-full" : "items-center justify-center"
        }`}
      >
        {/* Tagline */}
        {!title && (
          <>
            <div className="mb-4 z-10">
              <div className="w-52 rounded flex items-center justify-center">
                <img src={logo} alt="WePro" className="w-full" />
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-600 mb-6 z-10">
              Create and Share Custom Web Apps with Ease
            </h1>
            <div className="w-full max-w-md z-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title"
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white"
                />
                <FiSearch
                  className="absolute hover:cursor-pointer left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </>
        )}
        {title && (
          <div className="w-full py-3 bg-[#000000ad] rounded-xl text-white text-[16px]">
            <h1 className="">{title}</h1>
          </div>
        )}

        {/* Search Input */}
      </div>
    </div>
  );
};

export default Header;
