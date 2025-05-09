import React from "react";

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 w-full   hover:cursor-pointer">
      {/* Image */}
      <div className="w-16 h-16 mr-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
      </div>

      {/* Price */}
      <div className="ml-4">
        <span className="text-lg text-gray-600">Price</span>
        <p className="text-xl font-bold text-[#EB5A8E]">{price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
