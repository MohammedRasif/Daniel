"use client";

import { useState, useRef } from "react";

const Chatbot = () => {
    const [chatbotName, setChatbotName] = useState("");
    const [chatbotStyle, setChatbotStyle] = useState("");
    const [chatbotImageName, setChatbotImageName] = useState("");
    const [csvFileName, setCsvFileName] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");

    const chatbotImageRef = useRef(null);
    const csvFileRef = useRef(null);

    const handleChatbotImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setChatbotImageName(file.name);
        }
    };

    const handleCsvFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setCsvFileName(file.name);
        }
    };

    const handleCopy = () => {
        alert("Successfully copied!");
    };

    return (
        <div className="">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-medium text-gray-700">Chatbot Interactions</h1>
                <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-base font-semibold">iframe code</span>
                    <button onClick={handleCopy} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-base">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                        <span>Copy</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Chatbot settings */}
                <div className="w-full md:w-1/2 bg-white rounded-lg">
                    <h2 className="text-xl font-medium text-gray-700 py-5 text-center border-b border-gray-200 shadow-md rounded-b-md">Chatbot Settings</h2>
                    <div className="p-8">
                        <div className="space-y-5">
                            <div>
                                <label className="block text-base font-medium text-gray-700 mb-2">Name of the chatbot</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#E8789A] focus:border-transparent text-base"
                                    placeholder="Enter here"
                                    value={chatbotName}
                                    onChange={(e) => setChatbotName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-base font-medium text-gray-700 mb-2">Chatbot style</label>
                                <div className="relative">
                                    <select
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#E8789A] focus:border-transparent text-base"
                                        value={chatbotStyle}
                                        onChange={(e) => setChatbotStyle(e.target.value)}
                                    >
                                        <option value="" disabled selected>
                                            Select one
                                        </option>
                                        <option value="modern">Modern</option>
                                        <option value="classic">Classic</option>
                                        <option value="minimal">Minimal</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg
                                            className="h-6 w-6 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-base font-medium text-gray-700 mb-2">Chatbot image</label>
                                <div className="flex">
                                    <button
                                        type="button"
                                        onClick={() => chatbotImageRef.current?.click()}
                                        className="px-5 py-3 bg-gray-200 text-gray-700 text-base rounded-l-md hover:bg-gray-100"
                                    >
                                        Choose file
                                    </button>
                                    <span className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-md bg-gray-100 text-gray-500 text-base truncate">
                                        {chatbotImageName || "No file chosen"}
                                    </span>
                                    <input
                                        ref={chatbotImageRef}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleChatbotImageChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-base font-medium text-gray-700 mb-2">Upload CSV file</label>
                                <div className="flex">
                                    <button
                                        type="button"
                                        onClick={() => csvFileRef.current?.click()}
                                        className="px-5 py-3 bg-gray-200 text-gray-700 text-base rounded-l-md hover:bg-gray-100"
                                    >
                                        Choose file
                                    </button>
                                    <span className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-md bg-gray-100 text-gray-500 text-base truncate">
                                        {csvFileName || "No file chosen"}
                                    </span>
                                    <input
                                        ref={csvFileRef}
                                        type="file"
                                        accept=".csv"
                                        className="hidden"
                                        onChange={handleCsvFileChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-base font-medium text-gray-700 mb-2">Enter website link</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#E8789A] focus:border-transparent text-base"
                                    placeholder="Enter here"
                                    value={websiteLink}
                                    onChange={(e) => setWebsiteLink(e.target.value)}
                                />
                            </div>

                            <div className="pt-6">
                                <button
                                    type="button"
                                    className="w-full py-3 px-5 bg-[#E8789A] hover:bg-[#e66a8e] text-white font-medium rounded-md transition duration-200 text-base"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chatbot preview */}
                <div className="w-full md:w-1/2 bg-white rounded-lg">
                    <div className="relative border-b border-gray-200 shadow-md rounded-b-md">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                                <img
                                    src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1746620595/Group_2147225645_yagfrd.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-medium text-gray-700 py-5 text-center">Chatbot Preview</h2>
                    </div>
                    <div className="p-8">
                        <div className="space-y-6">
                            {/* User message 1 */}
                            <div className="bg-gray-100 rounded-lg p-4 max-w-xs">
                                <p className="text-base text-gray-700">ype and scrambled it to scrapfd</p>
                            </div>

                            {/* Bot message 1 */}
                            <div className="bg-[#20325A] rounded-lg p-4 ml-auto max-w-md">
                                <p className="text-base text-white">
                                    ype and scrambled it to make a type specimen book. It has sured not only five centuries, but also
                                    the leap into electronic typesetting, remaining
                                </p>
                            </div>

                            {/* User message 2 */}
                            <div className="bg-gray-100 rounded-lg p-4 max-w-xs">
                                <p className="text-base text-gray-700">ype and scrambled it to scrapfd</p>
                            </div>

                            {/* User message 3 */}
                            <div className="bg-gray-100 rounded-lg p-4 max-w-md">
                                <p className="text-base text-gray-700">
                                    ype and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining
                                </p>
                            </div>

                            {/* Bot message 2 */}
                            <div className="bg-[#20325A] rounded-lg p-4 ml-auto max-w-xs">
                                <p className="text-base text-white">ype and scrambl</p>
                            </div>

                            {/* Bot message 3 */}
                            <div className="bg-[#20325A] rounded-lg p-4 ml-auto max-w-md">
                                <p className="text-base text-white">
                                    ype and scrambled it to make a type specimen book. It has sured not only five centuries, but also
                                    the leap into electronic typesetting, remaining
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;