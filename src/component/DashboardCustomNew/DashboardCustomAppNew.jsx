import React, { useState } from "react";
import Title from "./Helpers/Title";
import TitleSection from "./Helpers/TitleSection";
import HeaderBtn from "./Helpers/HeaderBtn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AddPriceList from "./pagesPart/AddPriceList";

export default function DashboardCustomAppNew() {
  const [selected, setSelected] = useState("option1");
  const options = [
    { value: "option1", label: "Prices lists" },
    { value: "option2", label: "General Information  " },
    { value: "option3", label: "Trips and adventure" },
  ];

  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <Title text={"Create Your Own Apps"} />
        <TitleSection text={"Select App Category"}>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {options.map((option) => {
              const isSelected = selected === option.value;
              return (
                <HeaderBtn
                  key={option.value}
                  option={option}
                  isSelected={isSelected}
                  setSelected={setSelected}
                />
              );
            })}
          </div>
        </TitleSection>
        <div className="">
          <p className="w-full border-b border-gray-300 text-lg text-[#4E5C7B] pb-2 my-4">
            Pricelist
          </p>
          {/* show multipol component one by one first one then when user click next go to next  */}
          <AddPriceList />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 border-[#637186] border px-3 py-2 rounded-xl hover:cursor-pointer">
              <FaArrowLeft />
              <span>Previous</span>
            </button>
            <button className="flex items-center justify-center gap-2 border-[#637186] border px-3 py-2 rounded-xl hover:cursor-pointer">
              <span>Next</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
