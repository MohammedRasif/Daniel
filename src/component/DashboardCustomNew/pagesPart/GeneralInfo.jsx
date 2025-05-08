import React, { useState } from "react";
import Input from "../Helpers/Input";
import { FaPlus } from "react-icons/fa";
import ImageInputGroup from "../Helpers/ImageInputGroup";

export default function GeneralInfo() {
  const [title, setTitle] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [banner, setBanner] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  // handle dinamic inputs
  const [imageInputs, setImageInputs] = useState([]);
  // handle on change of new creted inputes
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
      contactNumber,
      description,
      email,
      banner,
      startTime,
      endTime,
      imageInputs, // This is the dynamic list
    };

    console.log("Final Form Data:", formData);

    // Reset the form
    setTitle("");
    setContactNumber("");
    setDescription("");
    setEmail("");
    setBanner(null);
    setStartTime("");
    setEndTime("");
    setImageInputs([]);
  };

  return (
    <div className="text-[#374055] mt-4 ">
      <div className="flex justify-between border-b border-[#9c9c9c] pb-2">
        <div>
          <h1 className="text-lg">General information's</h1>
        </div>
        <div
          onClick={addImageInput}
          className="flex items-center gap-2 text-[#374055] border border-[#374055] p-1 rounded-xl hover:cursor-pointer"
        >
          <FaPlus />
          <p>Add image</p>
        </div>
      </div>
      <div>
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          {/* Title & Contact Number */}
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
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
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

            {/* Second column */}
            <div className="flex gap-2 h-full flex-col md:flex-row">
              <Input
                id="startTime"
                labelText="Check in Time"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="10:00 AM"
                className="w-full p-[14px]"
              />
              <Input
                id="endTime"
                labelText="Check out"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="10:00 PM"
                className="w-full p-[14px]"
              />
            </div>
          </div>
          {imageInputs.map((input, index) => (
            <ImageInputGroup
              key={index}
              index={index}
              data={input}
              handleChange={handleImageInputChange}
            />
          ))}
          <div className="w-full flex items-center justify-center">
            <button
              className="border px-12 font-bold py-2 rounded-xl bg-[#eb5a8e] text-white hover:cursor-pointer "
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
