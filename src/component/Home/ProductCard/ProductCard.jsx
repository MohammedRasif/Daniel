import React, { useState } from "react";
import Modal from "react-modal";
import ProductDetailCard from "./ProductDetailCard";

// Accessibility for modal
Modal.setAppElement("#root");

export default function ProductCard({ product }) {
  const { image, name, description, price } = product;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Product Card */}
      <div
        className="bg-white rounded-lg shadow-md p-3 sm:p-4 w-full max-w-xs h-[380px] sm:h-[420px] cursor-pointer text-xs sm:text-sm"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-[180px] sm:h-[250px] mb-3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
          <span className="block text-xs sm:text-sm text-blue-600 underline mb-2 hover:text-blue-800">
            See More
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-gray-600">Price</span>
          <p className="text-base sm:text-lg font-bold text-red-500">{price}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Product Details"
        className="fixed inset-0 bg-[#2e2e2e28] backdrop-blur-[3px] flex justify-center items-center p-2 sm:p-4"
      >
        <ProductDetailCard
          closeModal={() => setIsModalOpen(false)}
          data={{ image, name, description, price }}
        />
      </Modal>
    </div>
  );
}
