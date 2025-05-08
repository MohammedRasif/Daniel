import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const ProductDetailCard = ({ data, closeModal }) => {
  const { image, name, description, price } = data;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md h-[500px]">
      <button
        onClick={closeModal}
        className="flex items-center hover:cursor-pointer text-gray-600 hover:text-gray-800 mb-4"
      >
        <FiArrowLeft size={16} className="mr-1" />
        <span className="text-sm">Back</span>
      </button>

      <div className="w-full  h-[250px] mb-4">
        <img src={image} alt={name} className="w-full h-[250px] rounded-md" />
      </div>
      <div>
        <h3 className="text-xl mb-4 font-semibold text-gray-800">{name}</h3>
        <p className=" text-gray-500 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-600">Price</span>
          <p className="text-2xl font-bold text-red-500">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
