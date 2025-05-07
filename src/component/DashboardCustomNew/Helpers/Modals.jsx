import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Modal from "react-modal";
import Input from "./Input";

Modal.setAppElement("#root");

const Modals = ({
  isOpen,
  onRequestClose,
  handleSubmit,
  productName,
  setProductName,
  productDescription,
  setProductDescription,
  productPrice,
  setProductPrice,
  productImage,
  setProductImage,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 bg-[#eceef15d] backdrop-blur-[3px] flex items-center justify-center z-50 max-h-[100vh] overflow-auto" // Adjust max-height to avoid full screen
      overlayClassName="bg-gray-500 bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-between mb-6">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onRequestClose} // Close modal when clicked
          >
            <FiArrowLeft size={20} />
          </button>
          <div className="text-lg font-semibold text-gray-800">Add product</div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              id="ProductName"
              labelText="Name of the product (10 word max)"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter name"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength={10}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (Max 0000 Word)
            </label>
            <textarea
              value={productDescription}
              id="ProductDescription"
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full h-full min-h-[112px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4E5C7B] focus:border-[#4E5C7B] placeholder-gray-400 resize-none"
            />
          </div>

          <div>
            <Input
              type="file"
              id="ProductImage"
              labelText="Upload product image"
              onChange={(e) => setProductImage(e.target.files[0])}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-[#D9DDE9] file:text-gray-700 hover:cursor-pointer"
            />
          </div>

          <div>
            <Input
              type="number"
              id="ProductPrice"
              labelText="Price of the product"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors hover:cursor-pointer"
          >
            Done
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Modals;
