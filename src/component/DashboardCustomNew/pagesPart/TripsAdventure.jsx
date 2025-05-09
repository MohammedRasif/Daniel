import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ImageInputGroup from "../Helpers/ImageInputGroup";
import Input from "../Helpers/Input";

export default function TripsAdventure() {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [banner, setBanner] = useState(null);
  const [category, setCategory] = useState("");
  const [imageInputs, setImageInputs] = useState([]);
  const addImageInput = () => {
    setImageInputs([...imageInputs, { title: "", file: null }]);
  };
  const handleImageInputChange = (index, field, value) => {
    const updated = [...imageInputs];
    updated[index][field] = value;
    setImageInputs(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      number,
      description,
      email,
      banner,
      category,
      imageInputs,
    };

    console.log("Submitted Data:", formData);

    // Reset all fields
    setTitle("");
    setNumber("");
    setDescription("");
    setEmail("");
    setBanner(null);
    setCategory("");
    setImageInputs([]);
  };

  return (
    <div className="text-[#374055] mt-4 ">
      <div className="flex justify-between border-b border-[#9c9c9c] pb-2">
        <div>
          <h1 className="text-lg">Tip's and Adventure</h1>
        </div>
        <div
          onClick={addImageInput}
          className="flex items-center gap-2 text-[#374055] border border-[#374055] p-1 rounded-md hover:cursor-pointer"
        >
          <FaPlus />
          <p>Add image</p>
        </div>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              id="appTitle"
              labelText="Title of the app"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter here"
            />
            <Input
              id="ContactNumber"
              labelText="Contact Number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter here"
            />
          </div>

          {/* Description & Upload/Image/Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <Input
              id="descriptin"
              labelText="Description (max-60-70 Word)"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter here"
            />
            <Input
              id="email"
              labelText="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter here"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* First column */}
            <Input
              id="banner"
              labelText="Upload Banner"
              type="file"
              value={banner}
              onChange={(e) => setBanner(e.target.files[0])}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-[#D9DDE9] file:text-gray-700 hover:cursor-pointer h-full"
              placeholder="banner"
              accept="image/*"
            />
            <Input
              id="category"
              labelText="Category (Max 12 words)"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter here"
              className="p-[14px]"
            />
          </div>
          {imageInputs.map((input, index) => (
            <ImageInputGroup
              key={index}
              index={index}
              data={input}
              handleChange={handleImageInputChange}
            />
          ))}
          <div className="w-full flex items-center justify-center mt-8">
            <button
              className="border px-12 font-bold py-2 rounded-md bg-[#eb5a8e] text-white hover:cursor-pointer "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
