import React from "react";

export default function Input({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  labelText = "",
  id = "input", // allow ID to be passed in
}) {
  return (
    <div className="flex flex-col items-start w-full mx-auto mt-4">
      {labelText && (
        <label htmlFor={id} className="text-sm font-medium text-[#4E5C7B] mb-1">
          {labelText}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4E5C7B] focus:border-[#4E5C7B] placeholder-gray-400 ${className}`}
      />
    </div>
  );
}
