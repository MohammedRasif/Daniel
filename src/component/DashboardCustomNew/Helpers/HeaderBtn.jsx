import React from "react";
import { CheckCircle, Circle } from "lucide-react"; // Make sure to install lucide-react
import { FaCheckCircle } from "react-icons/fa";

export default function HeaderBtn({ option, isSelected, setSelected }) {
  return (
    <label
      onClick={() => setSelected(option.value)}
      className={`cursor-pointer flex items-center gap-2 py-4 border rounded-xl transition justify-center text-xl
        ${
          isSelected
            ? "bg-[#20325A] border-[#D4DAEA] shadow-md text-white"
            : "bg-white border-[#D4DAEA]"
        }`}
    >
      {isSelected ? (
        <FaCheckCircle className="text-white" />
      ) : (
        <Circle className="text-gray-400 opacity-0" />
      )}
      <span className="text-[16px] font-medium">{option.label}</span>
    </label>
  );
}
