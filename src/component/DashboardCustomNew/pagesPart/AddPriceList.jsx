import React, { useState } from "react";
import Input from "../Helpers/Input";

export default function AddPriceList() {
  const [title, setTitle] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <div className="p-4 w-full max-w-6xl mx-auto">
      <form className="space-y-6">
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
          {/* Description */}
          <div className="flex flex-col w-full h-full">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Description (Max 60–70 words)
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter a short description"
              className="w-full h-full min-h-[112px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4E5C7B] focus:border-[#4E5C7B] placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Image Upload + Email */}
          <div className="flex flex-col gap-4 w-full h-full justify-between">
            <Input
              id="imageUpload"
              labelText="Upload Image"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-[#D9DDE9] file:text-gray-700 hover:cursor-pointer"
              accept="image/*"
            />
            <Input
              id="ContactEmail"
              labelText="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter here"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
