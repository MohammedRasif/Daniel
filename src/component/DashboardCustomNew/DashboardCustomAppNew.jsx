import React, { useEffect, useState } from "react";
import Title from "./Helpers/Title";
import TitleSection from "./Helpers/TitleSection";
import HeaderBtn from "./Helpers/HeaderBtn";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import AddPriceList from "./pagesPart/AddPriceList";
import SelectAppCategory from "./pagesPart/SelectAppCategory";
import Modals from "./Helpers/Modals";

export default function DashboardCustomAppNew() {
  const [productList, setProductList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState("option1");
  const [currentStep, setCurrentStep] = useState(0); // Track the current step
  const [productName, setProductName] = useState(""); // State for the new product name
  const [productDescription, setProductDescription] = useState(""); // State for the description
  const [productPrice, setProductPrice] = useState(""); // State for the price
  const [productImage, setProductImage] = useState(null); // State for the image file

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProductList(JSON.parse(savedProducts));
    } else {
      localStorage.setItem("products", JSON.stringify([]));
    }
  }, []);

  const options = [
    { value: "option1", label: "Prices lists" },
    { value: "option2", label: "General Information" },
    { value: "option3", label: "Trips and adventure" },
  ];

  const steps = [
    <div>
      <p className="w-full border-b border-gray-300 text-lg text-[#4E5C7B] pb-2 my-4">
        Pricelist
      </p>
      <AddPriceList />
    </div>,
    <div>
      <div className="flex w-full border-b border-gray-300 text-lg text-[#4E5C7B] pb-2 my-4 justify-between">
        <p className="">Pricelist Information</p>
        <button
          onClick={() => setIsModalOpen(true)} // Open modal when clicked
          className="flex items-center gap-2 rounded-2xl px-2 py-1 border hover:cursor-pointer"
        >
          <FaPlus />
          <span>Add Product</span>
        </button>
      </div>
      <SelectAppCategory productList={productList} />
    </div>,
    // Add more steps here as needed
  ];

  // Handle next and previous steps
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submission in the modal
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage ? productImage.name : "No image",
    };

    const updatedProducts = [...productList, newProduct];

    // Update localStorage and state
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProductList(updatedProducts);

    // Clear form & close modal
    setIsModalOpen(false);
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImage(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
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
        <div className="w-full">
          {/* Render the current step component */}
          {steps[currentStep]}
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="flex gap-4">
            {/* Previous Button */}
            <button
              onClick={handlePreviousStep}
              className="flex items-center justify-center gap-2 border-[#637186] border px-3 py-2 rounded-xl hover:cursor-pointer"
              disabled={currentStep === 0} // Disable if on the first step
            >
              <FaArrowLeft />
              <span>Previous</span>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextStep}
              className="flex items-center justify-center gap-2 border-[#637186] border px-3 py-2 rounded-xl hover:cursor-pointer"
              disabled={currentStep === steps.length - 1} // Disable if on the last step
            >
              <span>Next</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Adding Product */}
      <Modals
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        handleSubmit={handleSubmit} // Pass the handleSubmit function to the modal
        productName={productName}
        setProductName={setProductName}
        productDescription={productDescription}
        setProductDescription={setProductDescription}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        productImage={productImage}
        setProductImage={setProductImage}
      />
    </div>
  );
}
