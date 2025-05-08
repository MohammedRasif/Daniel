import React from "react";
import PreviewIframe from "./Preview/PreviewIframe";
import { FaArrowLeft, FaBatteryHalf, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiNetworkBars } from "react-icons/gi";
export default function Preview() {
  return (
    <div className="h-full">
      <div className=" h-[8%]">
        <div>
          <Link
            to="/dashboard/custom_app"
            className="flex items-center justify-start gap-2 text-gray-500 border border-gray-400 w-fit px-2 py-1 rounded hover:bg-gray-200"
          >
            <FaArrowLeft />
            <p>Back</p>
          </Link>
        </div>
        <h1 className="text-center text-2xl lg:text-3xl font-bold pb-6 md:pb-8">
          Apps preview
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center max-h-screen overflow-x-hidden py-6 h-[92%]">
        {/* Mobile Preview */}
        <div className="lg:w-[350px] h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-md relative">
          <div className="flex items-center justify-between ps-2 pe-6 absolute top-0 z-10 w-full bg-[#ffffff81]">
            <div>
              <p>9:41</p>
            </div>
            <div className="flex gap-[3px] text-xs">
              <GiNetworkBars />
              <FaWifi />
              <FaBatteryHalf />
            </div>
          </div>
          <PreviewIframe />
        </div>

        {/* Desktop Preview */}
        <div className="lg:w-[1024px] xl:w-full h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
          <PreviewIframe />
        </div>
      </div>
    </div>
  );
}
